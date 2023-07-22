import React, { useState, useEffect, ReactNode, createContext } from 'react';
import { GoogleRestaurant } from 'types/Restaurant';
import { loadFavourites, saveFavourites } from './utils';

type Props = {
  children: ReactNode;
};

type FavouriteContextValue = {
  favourites: GoogleRestaurant[];
  addToFavourites: (restaurant: GoogleRestaurant) => void;
  removeFromFavourites: (restaurant: GoogleRestaurant) => void;
};

export const FavouritesContext = createContext<FavouriteContextValue>({
  favourites: [],
  addToFavourites: () => {},
  removeFromFavourites: () => {},
});

export const FavouritesContextProvider = ({ children }: Props) => {
  const [favourites, setFavourites] = useState<GoogleRestaurant[]>([]);

  const add = (restaurant: GoogleRestaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant: GoogleRestaurant) => {
    const newFavourites = favourites.filter(
      (x) => x?.placeId !== restaurant?.placeId
    );

    setFavourites(newFavourites);
  };

  useEffect(() => {
    loadFavourites(setFavourites);
  }, []);

  useEffect(() => {
    saveFavourites(favourites);
  }, [favourites]);

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
