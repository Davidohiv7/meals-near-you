import React, {
  useState,
  createContext,
  useEffect,
  ReactNode,
  useContext,
} from 'react';
import { GoogleRestaurant } from 'types/Restaurant';
import {
  restaurantsRequest,
  restaurantsTransform,
} from 'services/restaurant/mockRestaurantData';
import { LocationContext } from './locationProvider';

type Props = {
  children: ReactNode;
};

type Error = {
  message: string;
  placement: string;
} | null;

type RestaurantContextValue = {
  restaurants: GoogleRestaurant[];
  isLoading: boolean;
  error?: Error;
};

export const RestaurantsContext = createContext<RestaurantContextValue>({
  restaurants: [],
  isLoading: false,
});

export const RestaurantsContextProvider = ({ children }: Props) => {
  const { location } = useContext(LocationContext);

  const [restaurants, setRestaurants] = useState<GoogleRestaurant[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const retrieveRestaurants = (locationString: string) => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest(locationString)
        .then(restaurantsTransform)
        .then((results: GoogleRestaurant[]) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((err: Error | null) => {
          setIsLoading(false);
          setError(err);
        });
    }, 500);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
