import { Platform, StatusBar } from 'react-native';

export const ANDROID = 'android';
export const IOS =  'ios';

export const IS_ANDROID = Platform.OS === ANDROID;
export const ANDROID_STATUSBAR_HEIGHT = StatusBar.currentHeight;
