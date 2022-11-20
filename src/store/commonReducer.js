import {createSlice, current} from '@reduxjs/toolkit';
import {
  GLOBAL_LOADING_FLAG,
  REQUEST_STATUS,
} from 'src/constants/commonConstans';

function globalLoadingPending(action) {
  return action.type.endsWith(
    `/${GLOBAL_LOADING_FLAG}/${REQUEST_STATUS.PENDING}`,
  );
}
function globalLoadingSuccess(action) {
  return action.type.endsWith(
    `/${GLOBAL_LOADING_FLAG}/${REQUEST_STATUS.FULFILLED}`,
  );
}
function globalLoadingReject(action) {
  return action.type.endsWith(
    `/${GLOBAL_LOADING_FLAG}/${REQUEST_STATUS.REJECTED}`,
  );
}

function judgeIncludeGLOBAL_LOADING_FLAG(type) {
  return type.indexOf(GLOBAL_LOADING_FLAG) === -1;
}

function cuzLoadingPending({type}) {
  return (
    type.endsWith(`/${REQUEST_STATUS.PENDING}`) &&
    judgeIncludeGLOBAL_LOADING_FLAG(type)
  );
}
function cuzLoadingSuccess({type}) {
  return (
    type.endsWith(`/${REQUEST_STATUS.FULFILLED}`) &&
    judgeIncludeGLOBAL_LOADING_FLAG(type)
  );
}
function cuzLoadingReject({type}) {
  return (
    type.endsWith(`
    /${REQUEST_STATUS.REJECTED}`) && judgeIncludeGLOBAL_LOADING_FLAG(type)
  );
}
const initialState = {
  globalLoading: false,
  loadingToast: false,
  successToast: false,
  failToast: false,
  //   cuzLoadingStatus: {success: false, loading: false, fail: false},
};
const commonSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setCuzLoadingStatus: (state, action) => {
      state.cuzLoadingStatus = action.payload;
    },
    setToastStatus: (state, action) => {
      const {type, flag} = action.payload;
      state[`${type}`] = flag;
    },
    setOtherToastToFalse: (state, action) => {
      const {type} = action.payload;
      const keys = Object.keys(state);
      keys
        .filter(item => item !== type)
        .forEach(itm => (state[`${itm}`] = false));
      console.log(current(state));
    },
    resetState: state => {
      state.loadingToast = false;
      state.successToast = false;
      state.failToast = false;
    },
  },
  extraReducers: builder => {
    builder //   // You can apply a "matcher function" to incoming actions
      .addMatcher(globalLoadingPending, (state, action) => {
        state.globalLoading = true;
      })
      .addMatcher(globalLoadingSuccess, (state, action) => {
        // state.isGlobalLoading = true;
        state.globalLoading = false;
      })
      .addMatcher(globalLoadingReject, (state, action) => {
        // state.isGlobalLoading = true;
        state.globalLoading = false;
      })
      .addMatcher(cuzLoadingPending, (state, action) => {
        state.loadingToast = true;
        state.successToast = false;
        state.failToast = false;
        // state.cuzLoadingStatus.loading = !state.cuzLoadingStatus.loading;
      })
      .addMatcher(cuzLoadingSuccess, (state, action) => {
        // state.isGlobalLoading = true;
        state.loadingToast = false;
        state.successToast = true;
        // state.cuzLoading = false;
        // setTimeout(() => {
        //   state.cuzLoading = false;
        // }, 1000);
      })
      .addMatcher(cuzLoadingReject, (state, action) => {
        // // state.isGlobalLoading = true;
        state.loadingToast = false;
        state.failToast = true;
      });
  },
});
export const {resetState, setToastStatus, setOtherToastToFalse} =
  commonSlice.actions;
export default commonSlice.reducer;
