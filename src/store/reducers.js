import loginSlice from 'pages/account/login/loginSlice';
import counterSlice from 'pages/account/login/counterSlice';
import commonSlice from './commonReducer';

export const reducers = {
  loginSlice: loginSlice,
  counterSlice: counterSlice,
  commonSlice: commonSlice,
};
