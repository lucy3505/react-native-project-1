import React from 'react';
import {TextInput} from 'react-native';

const handleChangeText = text => {
  alert(text);
};

const App = () => <TextInput onChangeText={handleChangeText} />;
export default App;
