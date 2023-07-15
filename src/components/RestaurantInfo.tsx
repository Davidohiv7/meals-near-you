import { FC } from 'react';
import { Text } from 'react-native-paper';
import { GoogleRestaurant } from 'types/Restaurant';
import RestaurantCard from './RestaurantCard';

type Props = {
  restaurant?: GoogleRestaurant;
};

const TEST_RESTAURANT: GoogleRestaurant = {
  name: 'Some Restaurant',
  icon: undefined,
  photos: [
    'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
  ],
  address: '100 some random street',
  isOpenNow: true,
  rating: 4,
  isClosedTemporarily: false,
};

export const RestaurantInfo: FC<Props> = ({ restaurant }) => {
  return <RestaurantCard restaurant={TEST_RESTAURANT} />;
};
