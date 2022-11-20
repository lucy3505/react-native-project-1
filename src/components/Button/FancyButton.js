import * as React from 'react';
import {Button} from 'react-native-paper';

export default function FancyButton(props) {
  return (
    <Button
      {...props}
      theme={{
        typescale: {labelLarge: {letterSpacing: 1}},

        roundness: 3,
        colors: {background: '#0f0'},
      }}
      mode="contained"
      buttonColor="#0f0"
    />
  );
}
