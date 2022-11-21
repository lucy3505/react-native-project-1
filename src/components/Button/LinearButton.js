import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-paper';
// Within your render function
export default function LinearButton(props) {
  // Later on in your styles..
  var styles = StyleSheet.create({
    linearGradient: {
      flex: 1,

      borderRadius: 5,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 18,
      fontFamily: 'Gill Sans',
      textAlign: 'center',

      color: '#ffffff',
      backgroundColor: 'transparent',
    },
  });
  return (
    <TouchableOpacity
      style={{
        width: '100%',
        height: '100%',
        ...props.style,
        overflow: 'hidden',
      }}
      onPress={props.onPress}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['rgb(84, 99, 77)', 'rgb(56, 101, 104)', 'rgb(0, 110, 0)']}
        style={styles.linearGradient}>
        <Text style={{...styles.buttonText}}>{props.children}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
