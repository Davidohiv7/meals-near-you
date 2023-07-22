import { View } from 'react-native';
import { styled } from 'styled-components';

export const SignInContainer = styled(View)`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
  width: 85%;
`;
