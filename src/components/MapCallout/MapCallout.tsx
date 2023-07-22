import CompactRestaurantInfo from 'components/CompactRestaurantInfo/CompactRestaurantInfo';
import { FC } from 'react';
import { GoogleRestaurant } from 'types/Restaurant';

type Props = {
  restaurant: GoogleRestaurant;
};

const MapCallout: FC<Props> = ({ restaurant }) => (
  <CompactRestaurantInfo restaurant={restaurant} />
);

export default MapCallout;
