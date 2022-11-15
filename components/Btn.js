import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {inject, observer} from 'mobx-react';

@inject('rootStore')
@observer
class Btn extends Component {
  handleChangeName = () => {
    this.props.rootStore.changeName('222');
    console.log(this.props.rootStore);
  };

  render() {
    console.log(this);
    return (
      <View>
        <Text onPress={this.handleChangeName}>
          Btn:{this.props.rootStore.name}
        </Text>
      </View>
    );
  }
}

export default Btn;
