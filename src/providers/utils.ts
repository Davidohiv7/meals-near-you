import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dispatch, SetStateAction } from 'react';
import {
  getStorageKey,
  loadStorageItem,
  setStorageItem,
} from 'services/storage';
import { GoogleRestaurant } from 'types/Restaurant';
import { AsyncStorageKey } from 'types/Storage';

export const saveFavourites = async (
  value: GoogleRestaurant[],
  uid: string
) => {
  try {
    const jsonValue = JSON.stringify(value);
    await setStorageItem(jsonValue, { uid, key: AsyncStorageKey.favourites });
  } catch (e) {
    console.log('error storing', e);
  }
};

export const loadFavourites = async (
  setFavourites: Dispatch<SetStateAction<GoogleRestaurant[]>>,
  uid: string
) => {
  try {
    const value = await loadStorageItem({
      uid,
      key: AsyncStorageKey.favourites,
    });

    if (value !== null) {
      const parsedValue: GoogleRestaurant[] = JSON.parse(value) || [];
      setFavourites(parsedValue);
    }
  } catch (e) {
    console.log('error loading', e);
  }
};
