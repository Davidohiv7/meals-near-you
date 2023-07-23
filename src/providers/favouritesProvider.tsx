import React, {
  useState,
  useEffect,
  ReactNode,
  createContext,
  useContext,
} from 'react';
import { GoogleRestaurant } from 'types/Restaurant';
import { loadFavourites, saveFavourites } from './utils';
import { AuthContext } from './authProvider';

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
  const { user } = useContext(AuthContext);
  const [favourites, setFavourites] = useState<GoogleRestaurant[]>([]);

  const add = (restaurant: GoogleRestaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant: GoogleRestaurant) => {
    if (user) {
      const newFavourites = favourites.filter(
        (x) => x?.placeId !== restaurant?.placeId
      );
      setFavourites(newFavourites);
    }
  };

  useEffect(() => {
    if (user) {
      loadFavourites(setFavourites, user.uid);
    }
  }, []);

  useEffect(() => {
    if (user) {
      saveFavourites(favourites, user.uid);
    }
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
