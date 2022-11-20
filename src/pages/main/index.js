import * as React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import Login from 'pages/account/login';
import Toast, {ToastProvider} from 'react-native-toast-notifications';
import customToastType, {
  GlobalLoading,
  useCuzToast,
} from 'utils/renderToastType';
import GlobalToast from 'components/Toast';
export default function Main() {
  //   const toast = useCuzToast();
  //   toast.globalLoading();
  return (
    <View style={{flex: 1}}>
      {/* <Nav></Nav> */}
      <Login></Login>

      <GlobalToast />
    </View>
  );
}
