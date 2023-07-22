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
  signIn = 'Sign In',
  signUp = 'Sign Up',
  main = 'Main',
}

export type StackList = {
  [TabName.main]: undefined;
  [TabName.signIn]: undefined;
  [TabName.signUp]: undefined;
  [TabName.map]: undefined;
  [TabName.restaurant]: undefined;
  [TabName.restaurantDetail]: {
    restaurant: GoogleRestaurant;
  };
};
