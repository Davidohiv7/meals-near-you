import { mockImages, mocks } from 'utils/mockData';
import { camelCase, capitalize } from 'lodash';

export const restaurantsRequest = (
  location: string
): Promise<{ results: any[] }> => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject('not found');
    }
    resolve(mock);
  });
};

export const restaurantsTransform = ({
  results = [],
}: {
  results: any[];
}): any[] =>
  results.map((restaurant) => {
    const camelizeRestauran = Object.keys(restaurant).reduce(
      (acc, key) => ({ ...acc, [camelCase(key)]: restaurant[key] }),
      {}
    );
    return {
      ...camelizeRestauran,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
      photos: restaurant.photos.map(() => {
        return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
      }),
      address: capitalize(restaurant?.vicinity?.split(',')?.[0]),
    };
  });
