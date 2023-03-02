import {View} from 'react-native';
import styled from 'styled-components';
import {variant} from 'styled-system';
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
export const Flex = styled(View)`
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
