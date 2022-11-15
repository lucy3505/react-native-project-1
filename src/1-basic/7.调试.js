import React from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
axios
  .get('https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata')
  .then(console.log);
console.log('调试');

//下载react-native-debugger
// https://github.com/jhen0409/react-native-debugger/blob/master/docs/getting-started.md
// 右键单击并选择“启用网络检查”
const App = () => {
  let x = 1;
  console.log(x);
  return (
    <View>
      <Text>======</Text>
    </View>
  );
};

export default App;
