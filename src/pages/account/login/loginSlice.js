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
const initialState = {sendVerifyCodeSuccess: false, userContent: {}};

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
  },
});

export const {setSendVerifyCodeSuccess, resetData, setUserContent} =
  loginSlice.actions;
export default loginSlice.reducer;
