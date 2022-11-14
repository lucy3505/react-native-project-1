import React from 'react';
import {View, Image, ImageBackground, Text} from 'react-native';
const handlePress = () => {
  alert('触屏');
};

const App = () => (
  <View>
    {/* <Image source={require('./images/1.jpeg')} />
    <Image source={require('./images/1.png')} /> */}
    {/* <Image source={require('./images/1.gif')} /> */}
    <Image
      style={{width: 200, height: 200}}
      source={{
        uri: 'https://pic1.zhimg.com/v2-19c1a680e6a459d10c105e5c20c875ca_b.jpg',
      }}
    />
    <ImageBackground
      source={require('./images/1.png')}
      style={{height: 200, width: 200}}>
      <Text>Insider</Text>
    </ImageBackground>
  </View>
);
export default App;
