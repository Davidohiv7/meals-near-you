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
import { LOCATION_URL, RESTAURANT_URL } from 'utils/constants';

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

  const retrieveRestaurants = async (locationString: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${RESTAURANT_URL}?location=${locationString}`
      );
      const restaurants = await response?.json();
      setRestaurants(restaurants);
    } catch (e: any) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.location.lat},${location.location.lng}`;
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
