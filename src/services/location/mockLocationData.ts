import { capitalize } from 'lodash';
import { mockLocations } from 'utils/mockData/location';
import transformCityIndex from 'utils/transformCityIndex';

export const locationRequest = (searchTerm: string) => {
  return new Promise((resolve, reject) => {
    const locationMock = mockLocations[transformCityIndex(searchTerm)];
    if (!locationMock) {
      reject(`${capitalize(searchTerm)} not found`);
    }
    resolve(locationMock);
  });
};

export const locationTransform = (
  result: any
): { lat: string; lng: string } => {
  const { geometry = {} } = result.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng };
};
