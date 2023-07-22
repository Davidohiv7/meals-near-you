import { capitalize } from 'lodash';
import { Geometry } from 'types/Map';
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

export const locationTransform = (result: any): Geometry => {
  const { geometry = {} } = result.results[0];
  const location: Geometry = geometry;
  return location;
};
