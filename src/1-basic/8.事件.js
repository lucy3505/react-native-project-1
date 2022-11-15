import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
axios
  .get('https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata')
  .then(console.log);
console.log('调试');

class App extends Component {
  state = {num: 100};
  //丢失state
  handlePress1() {
    console.log(this.state);
  }
  //正常

  handlePress2 = () => {
    console.log(this.state);
  };
  //正常
  handlePress3() {
    console.log(this.state);
  }
  //正常
  handlePress4() {
    console.log(this.state);
  }
  render() {
    return (
      <View>
        {/* 导致事件函数中获取不到state */}
        <Text onPress={this.handlePress1}>事件1</Text>
        {/* 正常 */}
        <Text onPress={this.handlePress2}>事件2</Text>
        {/* 正常 */}
        <Text onPress={this.handlePress3.bind(this)}>事件3</Text>
        {/* 正常 */}
        <Text onPress={() => this.handlePress4()}>事件4</Text>
      </View>
    );
  }
}

export default App;
