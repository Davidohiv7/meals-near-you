import React, { useState, useEffect, ReactNode, createContext } from 'react';
import {
  locationRequest,
  locationTransform,
} from 'services/location/mockLocationData';
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

  const onSearch = (searchKeyword = '') => {
    if (!searchKeyword || searchKeyword === keyword) {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    setKeyword(searchKeyword);
    locationRequest(searchKeyword)
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
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
