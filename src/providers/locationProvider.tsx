import React, { useState, useEffect, ReactNode, createContext } from 'react';
import {
  locationRequest,
  locationTransform,
} from 'services/location/mockLocationData';
import { Geometry } from 'types/Map';
import { LOCATION_URL } from 'utils/constants';

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

  const onSearch = async (searchKeyword = '') => {
    if (!searchKeyword || searchKeyword === keyword) {
      setIsLoading(false);
      return;
    }
    setKeyword(searchKeyword);
    setIsLoading(true);
    try {
      const response = await fetch(`${LOCATION_URL}/${searchKeyword}`);
      const location = await response?.json();
      setLocation(location);
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
