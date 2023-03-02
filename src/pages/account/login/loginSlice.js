import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import request from 'utils/request';
import {ACCOUNT_LOGIN, ACCOUNT_VALIDATEVCODE} from 'utils/pathMap';
import {GLOBAL_LOADING_FLAG} from 'src/constants/commonConstans';
// export const getLogin = createAsyncThunk(
//   `/get/login/`,
export const getLogin = createAsyncThunk(
  `/get/login/${GLOBAL_LOADING_FLAG}`,
  async value => {
    try {
      const res = await request.post(ACCOUNT_LOGIN, value);

      return res;
    } catch (err) {
      console.log(err);
    }
    // console.log('Res::', res);
  },
);

export const sendVcode = createAsyncThunk(
  `/send/vcode/${GLOBAL_LOADING_FLAG}`,
  async value => {
    try {
      const res = await request.post(ACCOUNT_VALIDATEVCODE, value);

      return res;
    } catch (err) {
      console.log(err);
    }
    // console.log('Res::', res);
  },
);

export const getAddress = createAsyncThunk(
  `/user/getAddress/${GLOBAL_LOADING_FLAG}`,
  async data => {
    try {
      // const res = await request.get(
      //   `https://restapi.amap.com/v3/geocode/regeo?location=116.310003,39.991957&key=f47506b2a91d59f4ef0ee4a66c8356ac&radius=1000&extensions=all`,
      // );

      // console.log(res);
      const res = await request.post('/user/location', data);
      console.log('addredd:::', res);
      return res.data;
    } catch (err) {
      console.log(err);
    }
    // console.log('Res::', res);
  },
);

// export const getAddress = (lat, lng, callback) => {
//   fetch(`https://restapi.amap.com/v3/geocode/regeo?key=${web key}&location=${lng},${lat}`, {
//       method: 'GET',
//   })
//       .then(response => response.json())
//       .then(result => {
//           console.log('result', result);
//       })
//       .catch(error => {
//           console.log('error', error);
//       });
// };
const initialState = {sendVerifyCodeSuccess: false, userContent: {}, loc: ''};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setSendVerifyCodeSuccess: (state, {payload}) => {
      state.sendVerifyCodeSuccess = payload;
    },
    setUserContent: (state, {payload}) => {
      state.userContent = payload;
    },
    resetData: (state, {payload}) => {
      state.sendVerifyCodeSuccess = initialState.sendVerifyCodeSuccess;
      state.isNewUser = initialState.isNewUser;
    },
  },
  extraReducers: builder => {
    builder.addCase(getLogin.pending, (state, {payload}) => {
      // state.v += payload;
    });
    builder.addCase(getLogin.fulfilled, (state, {payload}) => {
      // state.v += payload;
      state.sendVerifyCodeSuccess = true;
    });
    builder.addCase(sendVcode.fulfilled, (state, {payload}) => {
      // state.v += payload;
      if (payload.code === '10001') {
        state.isNewUser = payload.msg;
        return;
      }
      state.userContent = payload;
    });
    builder.addCase(getAddress.fulfilled, (state, {payload}) => {
      state.loc = payload.regeocode?.addressComponent?.province;
    });
  },
});

export const {setSendVerifyCodeSuccess, resetData, setUserContent} =
  loginSlice.actions;
export default loginSlice.reducer;
