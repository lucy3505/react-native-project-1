/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
/**
 * 1 在rn中默认容器 布局方式 都是flex
 * 2 方向 flex-direction:column;
 * 3 在rn中样式 没有继承
 * 4 单位
 *    1 不用加px
 *    2 不用vw vh
 *    3 可以加 百分比 “50%”
 * 5 Dimensions
 * 6 变换
 *
 *
 */
const App = () => (
  <View
    style={{
      backgroundColor: 'aqua',
      flexDirection: 'row',
      width: '50%',
      height: '50%',
    }}>
    <Text style={{color: 'red', fontSize: 50}}>JSX</Text>
    <Text>JSX2</Text>
    <View
      style={{
        width: windowWidth / 2,
        height: windowHeight / 2,
        backgroundColor: 'yellow',
      }}>
      <Text>屏幕宽度和高度的一半</Text>
    </View>
    {/* 变换 */}
    <View>
      <Text
        style={{
          backgroundColor: 'green',
          transform: [{translateY: 200}, {scale: 2}],
        }}>
        JSX3
      </Text>
    </View>
  </View>
);
export default App;
