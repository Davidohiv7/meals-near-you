import CompactRestaurantInfo from 'components/Restaurant/CompactRestaurantInfo/CompactRestaurantInfo';
import { FC } from 'react';
import { GoogleRestaurant } from 'types/Restaurant';

type Props = {
  restaurant: GoogleRestaurant;
};

const MapCallout: FC<Props> = ({ restaurant }) => (
  <CompactRestaurantInfo isMap restaurant={restaurant} />
);

export default MapCallout;
