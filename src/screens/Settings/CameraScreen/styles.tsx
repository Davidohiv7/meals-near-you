import { SafeAreaView } from 'react-native';
import { Camera } from 'expo-camera';
import { styled } from 'styled-components';
import { ANDROID_STATUSBAR_HEIGHT } from 'utils/constants';

export const NoPermissionsSafeAreaView = styled(SafeAreaView)`
  margin-top: ${ANDROID_STATUSBAR_HEIGHT || 0}px;
  background-color: ${(props) => props.theme.colors.bg.primary};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;
