import { useFetchApi } from 'hooks';
import React, { useState, useEffect, ReactNode, createContext } from 'react';
import { Alert } from 'react-native';
import { Paths } from 'types/Api';
import { Geometry } from 'types/Map';

type Props = {
  children: ReactNode;
};

type LocationContextValue = {
  location: Geometry | null;
  isLoading: boolean;
  error: string | null;
  search: (searchKeyword?: string) => void;
  keyword: string;
};

const DEFAULT_KEYWORD = 'San Francisco';

export const LocationContext = createContext<LocationContextValue>({
  isLoading: false,
  error: null,
  location: null,
  search: (_searchKeyword?: string) => {},
  keyword: '',
});

export const LocationContextProvider = ({ children }: Props) => {
  const [keyword, setKeyword] = useState<string>('');
  const [location, setLocation] = useState<null | Geometry>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { getData } = useFetchApi();

  const onSearch = async (searchKeyword = '') => {
    if (!searchKeyword || searchKeyword === keyword) {
      setIsLoading(false);
      return;
    }
    setKeyword(searchKeyword);
    setIsLoading(true);
    try {
      const { data, error, message } = await getData({
        path: Paths.location,
        param: searchKeyword,
      });
      if (error) {
        Alert.alert(message);
        return setError(message);
      }
      setLocation(data);
    } catch (e: any) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    onSearch(DEFAULT_KEYWORD);
  }, []);
  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
