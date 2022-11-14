import React from 'react';
import {View, Text} from 'react-native';

const App = () => (
  <View>
    <Text>======</Text>
    <Sub color1="red">
      <View>
        <Text>++++++++++++++</Text>
      </View>
    </Sub>
    <Text>==========</Text>
  </View>
);

//子组件 props.color
//插槽 类似vue中slot
const Sub = props => (
  <View>
    <Text style={{color: props.color1}}>自组件</Text>
    {props.children}
  </View>
);

export default App;
