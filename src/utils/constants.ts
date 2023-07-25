import { CameraType } from 'expo-camera';
import { Platform, StatusBar } from 'react-native';
import { TabIcon, TabName } from 'types/Navigation';
import { API_URL } from '@env';

export const ANDROID = 'android';
export const IOS = 'ios';

export const IS_ANDROID = Platform.OS === ANDROID;
export const ANDROID_STATUSBAR_HEIGHT = StatusBar.currentHeight;

export const TAB_ICON_OBJECT: { [key: string]: TabIcon } = {
  [TabName.restaurant]: TabIcon.restaurant,
  [TabName.settings]: TabIcon.settings,
  [TabName.map]: TabIcon.map,
};

export const CAMERA_FRONT = CameraType.front;
export const CAMERA_BACK = CameraType.back;

export const LOCATION_URL = `${API_URL}/location`;
export const RESTAURANT_URL = `${API_URL}/restaurant`;
