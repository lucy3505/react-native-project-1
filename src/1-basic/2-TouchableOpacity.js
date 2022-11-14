import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
const handlePress = () => {
  alert('触屏');
};

const App = () => (
  <TouchableOpacity activeOpacity={0} onPress={handlePress}>
    <Text>TouchableOpacity</Text>
  </TouchableOpacity>
);
export default App;
