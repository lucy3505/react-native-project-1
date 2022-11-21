import React, {useEffect, useState, useRef} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import Login from 'pages/account/login';
import Toast, {ToastProvider} from 'react-native-toast-notifications';
import customToastType from 'utils/renderToastType';
import {useDispatch, useSelector} from 'react-redux';

export default function GlobalToast() {
  //   const toast = useCuzToast();
  //   toast.globalLoading();
  const {globalLoading, successToast, loadingToast, failToast} = useSelector(
    state => state.commonSlice,
  );
  const [toastId, setToastId] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    if (globalLoading) {
      globalToastRef.current.show('siccess', {type: 'globalLoading'});
    } else {
      setTimeout(() => {
        globalToastRef?.current?.hideAll();
      }, 200);
    }
  }, [globalLoading]);

  useEffect(() => {
    if (successToast) {
      setTimeout(() => {
        loadingToastRef?.current?.update(toastId, 'success', {type: 'success'});
      }, 300);
    }
  }, [successToast]);

  useEffect(() => {
    if (loadingToast) {
      const id = loadingToastRef.current.show('loading');
      setToastId(id);
    }
  }, [loadingToast]);

  const globalToastRef = useRef(null);

  const loadingToastRef = useRef(null);

  // const toastRef = useRef(null);
  if (globalLoading) {
    return (
      <Toast ref={globalToastRef} {...customToastType} placement="center" />
    );
  }
  if (loadingToast || successToast || failToast) {
    return <Toast ref={loadingToastRef} placement="center"></Toast>;
  }

  return <></>;
}
