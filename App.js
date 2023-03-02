import * as React from 'react';
import {View, Text, ActivityIndicator, LogBox} from 'react-native';

import Toast, {ToastProvider} from 'react-native-toast-notifications';
import {store} from 'src/store/index';
import Main from 'pages/main';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import {theme} from 'utils/theme';
import {ThemeProvider} from 'styled-components';
import Nav from './src/nav';
import GlobalToast from 'components/Toast';
// import { init, Geolocation, setAllowsBackgroundLocationUpdates} from "react-native-amap-geolocation"

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PaperProvider theme={theme}>
          <ToastProvider {...customToastType}>
            <View style={{flex: 1}}>
              {/* <Nav></Nav> */}

              <Nav></Nav>
            </View>
          </ToastProvider>
        </PaperProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
