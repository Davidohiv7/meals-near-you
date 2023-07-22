import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dispatch, SetStateAction } from 'react';
import { GoogleRestaurant } from 'types/Restaurant';

const FAVOURITES_STORAGE_KEY = '@favourites';

export const saveFavourites = async (value: GoogleRestaurant[]) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(FAVOURITES_STORAGE_KEY, jsonValue);
  } catch (e) {
    console.log('error storing', e);
  }
};

export const loadFavourites = async (
  setFavourites: Dispatch<SetStateAction<GoogleRestaurant[]>>
) => {
  try {
    const value = await AsyncStorage.getItem(FAVOURITES_STORAGE_KEY);
    if (value !== null) {
      const parsedValue: GoogleRestaurant[] = JSON.parse(value) || [];
      setFavourites(parsedValue);
    }
  } catch (e) {
    console.log('error loading', e);
  }
};
