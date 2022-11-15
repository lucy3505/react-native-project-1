import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'mobx-react';
import rootStore from './mobx/index';
import Btn from './components/Btn';
class App extends Component {
  state = {num: 100};

  render() {
    return (
      <View>
        <Provider rootStore={rootStore}>
          <Btn></Btn>
        </Provider>
      </View>
    );
  }
}

export default App;
