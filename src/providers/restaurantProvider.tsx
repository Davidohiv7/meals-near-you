import React, {
  useState,
  createContext,
  useEffect,
  ReactNode,
  useContext,
} from 'react';
import { GoogleRestaurant } from 'types/Restaurant';
import { LocationContext } from './locationProvider';
import { useFetchApi } from 'hooks';
import { Paths } from 'types/Api';
import { Alert } from 'react-native';
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
  const { getData } = useFetchApi();

  const retrieveRestaurants = async (locationString: string) => {
    setIsLoading(true);
    try {
      const { data, error, message } = await getData({
        path: Paths.restaurant,
        queryParams: {
          location: locationString,
        },
      });
      if (error) {
        Alert.alert(message);
        return setError(message);
      }
      setRestaurants(data);
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
