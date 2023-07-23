import { FC, useContext, useEffect, useRef } from 'react';
import ScreenStyledSafeAreaView from 'components/ScreenSafeAreaView';
import type { StackScreenProps } from '@react-navigation/stack';
import { StackList, TabName } from 'types/Navigation';
import { NoPermissionsSafeAreaView, ProfileCamera } from './styles';
import { CAMERA_FRONT, IS_ANDROID } from 'utils/constants';
import { Camera } from 'expo-camera';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { AuthContext } from 'providers/authProvider';
import { setStorageItem } from 'services/storage';
import { AsyncStorageKey } from 'types/Storage';

type Props = StackScreenProps<StackList, TabName.camera>;

const CameraScreen: FC<Props> = ({ navigation, route }) => {
  const { user } = useContext(AuthContext);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef<Camera | null>();

  const { getProfilePicture } = route.params;

  const snap = async () => {
    if (cameraRef?.current && user?.uid) {
      const { uri } = await cameraRef.current.takePictureAsync();
      await setStorageItem(uri, {
        uid: user.uid,
        key: AsyncStorageKey.profilePicture,
      });
      if (getProfilePicture) {
        await getProfilePicture(user.uid);
      }
      navigation.goBack();
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
