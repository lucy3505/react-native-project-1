import {Text as RNText} from 'react-native';

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
  typography,
} from 'styled-system';

export const textMixin = compose(typography, space, color);
export const Text = styled(RNText)`
  ${textMixin}
`;
