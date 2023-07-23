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
  favourites = 'Favourites',
  favouriteDetail = 'Favourite Detail',
  camera = 'Camera',
}

export type StackList = {
  [TabName.settings]: undefined;
  [TabName.camera]: undefined;
  [TabName.favourites]: undefined;
  [TabName.favouriteDetail]: {
    restaurant: GoogleRestaurant;
  };
  [TabName.main]: undefined;
  [TabName.signIn]: undefined;
  [TabName.signUp]: undefined;
  [TabName.map]: undefined;
  [TabName.restaurant]: undefined;
  [TabName.restaurantDetail]: {
    restaurant: GoogleRestaurant;
  };
};
