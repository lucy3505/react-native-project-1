import {TouchableOpacity as RNTouchableOpacity} from 'react-native';
import {variant} from 'styled-system';
import styled from 'styled-components';
import {
  background,
  border,
  color,
  compose,
  flexbox,
  layout,
  position,
  space,
  system,
  textAlign,
} from 'styled-system';
export const boxMixin = compose(
  background,
  border,
  color,
  flexbox,
  layout,
  position,
  space,
  textAlign,
);

export const TouchableOpacity = styled(RNTouchableOpacity)`
  ${boxMixin}
  ${variant({
    variants: {
      normal: {
        display: 'flex',
      },
      center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      },
    },
  })}
`;

export default TouchableOpacity;
