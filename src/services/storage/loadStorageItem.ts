import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageConfig } from 'types/Storage';
import getStorageKey from './getStorageKey';

const loadStorageItem = async ({
  uid,
  key,
}: StorageConfig): Promise<string | null> => {
  return await AsyncStorage.getItem(getStorageKey({ uid, key }));
};

export default loadStorageItem;
