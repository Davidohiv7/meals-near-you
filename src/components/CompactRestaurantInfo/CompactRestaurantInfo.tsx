import { InfoItem } from 'components/RestaurantCard/styles';
import { FC } from 'react';
import { CompactImage, CompactWebview, Item } from './styles';
import { GoogleRestaurant } from 'types/Restaurant';
import { IS_ANDROID } from 'utils/constants';
import { Text } from 'react-native-paper';

type Props = {
  restaurant: GoogleRestaurant;
};

const CompactRestaurantInfo: FC<Props> = ({ restaurant }) => {
  const source = { uri: restaurant.photos[0] };
  const Image = IS_ANDROID ? (
    <CompactWebview source={source} />
  ) : (
    <CompactImage source={source} />
  );
  return (
    <Item>
      {Image}
      <Text numberOfLines={3}>{restaurant.name}</Text>
    </Item>
  );
};

export default CompactRestaurantInfo;
