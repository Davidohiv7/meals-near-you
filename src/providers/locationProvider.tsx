import React, { useState, useEffect, ReactNode } from 'react';
import {
  locationRequest,
  locationTransform,
} from 'services/location/mockLocationData';

type Props = {
  children: ReactNode;
};

type Location = {
  lat: string;
  lng: string;
};

type LocationContextValue = {
  location: Location | null;
  isLoading: boolean;
  error: string | null;
  search: (searchKeyword?: string) => void;
  keyword: string;
};

const DEFAULT_KEYWORD = 'San Francisco';

export const LocationContext = React.createContext<LocationContextValue>({
  isLoading: false,
  error: null,
  location: null,
  search: (_searchKeyword?: string) => {},
  keyword: '',
});

export const LocationContextProvider = ({ children }: Props) => {
  const [keyword, setKeyword] = useState<string>('');
  const [location, setLocation] = useState<null | { lat: string; lng: string }>(
    null
  );
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
