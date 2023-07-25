import { GoogleRestaurant } from './Restaurant';

export enum TabIcon {
  restaurant = 'md-restaurant',
  settings = 'md-settings',
  map = 'md-map',
}

export enum TabName {
  restaurantMain = 'Restaurant',
  restaurant = 'Restaurants',
  settings = 'Settings',
  settingsMain = 'Settings Main',
  map = 'Map',
  restaurantDetail = 'Restaurant Detail',
  signIn = 'Sign In',
  signUp = 'Sign Up',
  main = 'Main',
  favouritesMain = 'Favourites Main',
  favourites = 'Favourites',
  favouriteDetail = 'Favourite Detail',
  camera = 'Camera',
}

export type StackList = {
  [TabName.settings]: undefined;
  [TabName.settingsMain]: undefined;
  [TabName.camera]: {
    getProfilePicture: (uid: string) => Promise<void>;
  };
  [TabName.favouritesMain]: undefined;
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
