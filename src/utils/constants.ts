import { Platform, StatusBar } from 'react-native';
import { TabIcon, TabName } from 'types/Navigation';

export const ANDROID = 'android';
export const IOS = 'ios';

export const IS_ANDROID = Platform.OS === ANDROID;
export const ANDROID_STATUSBAR_HEIGHT = StatusBar.currentHeight;

export const TAB_ICON_OBJECT: { [key: string]: TabIcon } = {
  [TabName.restaurant]: TabIcon.restaurant,
  [TabName.settings]: TabIcon.settings,
  [TabName.map]: TabIcon.map,
};
