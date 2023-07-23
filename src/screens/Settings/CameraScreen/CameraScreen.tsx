import { FC, useEffect, useRef } from 'react';
import ScreenStyledSafeAreaView from 'components/ScreenSafeAreaView';
import type { StackScreenProps } from '@react-navigation/stack';
import { StackList, TabName } from 'types/Navigation';
import { NoPermissionsSafeAreaView, ProfileCamera } from './styles';
import { CAMERA_FRONT, IS_ANDROID } from 'utils/constants';
import { Camera, requestPermissionsAsync } from 'expo-camera';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';

type Props = StackScreenProps<StackList, TabName.camera>;

const CameraScreen: FC<Props> = () => {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef<Camera | null>();

  const snap = async () => {
    if (cameraRef?.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo);
    }
  };

  useEffect(() => {
    if (!permission?.granted) {
      requestPermission();
    }
  }, []);

  if (!permission?.granted) {
    return (
      <NoPermissionsSafeAreaView>
        <Text variant="displaySmall">No camera permissions</Text>
      </NoPermissionsSafeAreaView>
    );
  }
  return (
    <ScreenStyledSafeAreaView>
      <TouchableOpacity onPress={() => snap()}>
        <ProfileCamera
          ref={(camera) => (cameraRef.current = camera)}
          type={CAMERA_FRONT}
          ratio={IS_ANDROID ? '16:9' : undefined}
        />
      </TouchableOpacity>
    </ScreenStyledSafeAreaView>
  );
};

export default CameraScreen;
