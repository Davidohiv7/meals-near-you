import { View } from 'react-native';
import { styled } from 'styled-components';

export const SearchBarContainer = styled(View)`
  position: absolute;
  z-index: 100;
  width: 100%;
  padding: ${(props) => props.theme.space[3]};
`;
