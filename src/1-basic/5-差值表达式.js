import React from 'react';
import {View, Text} from 'react-native';

const obj = {name: '悟空'};
const arr = [1, 2, 3, 4];
const App = () => (
  <View>
    <Text>开心</Text>
    <Text>{'开心'}</Text>
    <Text>{123}</Text>
    <Text>{'true'}</Text>
    {/* 对象不能直接打印，要打印里面的值才行，否则报错 */}
    <Text>{obj.name}</Text>
    {/* 数组的展示是会平铺显示 */}

    <Text>{arr}</Text>
    {/* 数组进行处理后的展示是使用map 只要循环就要加个key*/}
    {arr.map(v => (
      <View key={v} style={{backgroundColor: 'aqua'}}>
        <Text>--{v + '====='}</Text>
      </View>
    ))}
  </View>
);
export default App;
