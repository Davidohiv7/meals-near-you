export type GoogleRestaurant = {
  name: string;
  icon?: any;
  photos: string[];
  address: string;
  isOpenNow: boolean;
  rating: number;
  isClosedTemporarily?: boolean;
};
