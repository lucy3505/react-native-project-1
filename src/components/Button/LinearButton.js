import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, Text} from 'react-native';

// Within your render function
export default function LinearButton() {
  // Later on in your styles..
  var styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5,
    },
    buttonText: {
      fontSize: 18,
      fontFamily: 'Gill Sans',
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
      backgroundColor: 'transparent',
    },
  });
  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.linearGradient}>
      <Text style={styles.buttonText}>Sign in with Facebook</Text>
    </LinearGradient>
  );
}
