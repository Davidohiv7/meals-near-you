import { useRoute } from '@react-navigation/native';
import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';
import RestaurantCardInfo from 'components/RestaurantCard/RestaurantCard';
import { FC } from 'react';
import { Text, View } from 'react-native';
import { StackList, TabName } from 'types/Navigation';

type Props = StackScreenProps<StackList, TabName.restaurantDetail>;

const RestaurantDetailScreen: FC<Props> = ({ route }) => {
  return (
    <View>
      <RestaurantCardInfo restaurant={route.params.restaurant} />
    </View>
  );
};

export default RestaurantDetailScreen;
