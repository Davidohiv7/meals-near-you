import { JSXElementConstructor, ReactNode } from 'react';
import { ImageBackground, View } from 'react-native';
import { ActivityIndicator, Button, Text } from 'react-native-paper';
import { styled } from 'styled-components';

export const AccountBackground: JSXElementConstructor<{
  source?: string;
  children: ReactNode;
}> = styled(ImageBackground).attrs({
  source: require('../../../../assets/home_bg.jpeg'),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled(View)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.6);
  filter: blur(10px);
`;

export const AccountContainer = styled(View)`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button)`
  padding: ${(props) => props.theme.space[2]};
`;

export const AuthTitle = styled(Text).attrs({
  variant: 'headlineMedium',
})`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-family: ${(props) => props.theme.fonts.monospace};
`;

export const Loading = styled(ActivityIndicator).attrs({
  size: 28,
})``;

export const AnimationWrapper = styled(View)`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 30px;
  padding: ${(props) => props.theme.space[2]};
`;
