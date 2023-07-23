import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageConfig } from 'types/Storage';
import getStorageKey from './getStorageKey';

const setStorageItem = async (
  item: string,
  { uid, key }: StorageConfig
): Promise<void> => {
  await AsyncStorage.setItem(getStorageKey({ uid, key }), item);
};

export default setStorageItem;
