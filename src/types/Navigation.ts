import { GoogleRestaurant } from './Restaurant';

export enum TabIcon {
  restaurant = 'md-restaurant',
  settings = 'md-settings',
  map = 'md-map',
}

export enum TabName {
  restaurant = 'Restaurants',
  settings = 'Settings',
  map = 'Map',
  restaurantDetail = 'Restaurant Detail',
}

export type StackList = {
  [TabName.restaurant]: undefined;
  [TabName.restaurantDetail]: {
    restaurant: GoogleRestaurant;
  };
};
