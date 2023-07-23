import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dispatch, SetStateAction } from 'react';
import { GoogleRestaurant } from 'types/Restaurant';

const FAVOURITES_STORAGE_KEY = '@favourites';
const getFavouritesKey = (uid: string) => `${uid}:${FAVOURITES_STORAGE_KEY}`;

export const saveFavourites = async (
  value: GoogleRestaurant[],
  uid: string
) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(getFavouritesKey(uid), jsonValue);
  } catch (e) {
    console.log('error storing', e);
  }
};

export const loadFavourites = async (
  setFavourites: Dispatch<SetStateAction<GoogleRestaurant[]>>,
  uid: string
) => {
  try {
    const value = await AsyncStorage.getItem(getFavouritesKey(uid));
    if (value !== null) {
      const parsedValue: GoogleRestaurant[] = JSON.parse(value) || [];
      setFavourites(parsedValue);
    }
  } catch (e) {
    console.log('error loading', e);
  }
};
