import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import request from 'utils/request';
import {ACCOUNT_LOGIN} from 'utils/pathMap';
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
const initialState = {v: 100};

const loginSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getLogin.pending, (state, {payload}) => {
      // state.v += payload;
    });
  },
});

export const loginAction = loginSlice.actions;
export default loginSlice.reducer;
