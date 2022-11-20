import * as React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

import Toast, {ToastProvider} from 'react-native-toast-notifications';
import {store} from 'src/store/index';
import Main from 'pages/main';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import {theme} from 'utils/theme';
function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <ToastProvider {...customToastType}>
          <View style={{flex: 1}}>
            {/* <Nav></Nav> */}

            <Main></Main>
          </View>
        </ToastProvider>
      </PaperProvider>
    </Provider>
  );
}

export default App;
