import {View} from 'react-native';

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

export const Box = styled(View)`
  ${boxMixin}
`;

export default Box;
