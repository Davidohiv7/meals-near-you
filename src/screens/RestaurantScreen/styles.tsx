import { FlatListProps } from 'react-native';
import { styled } from 'styled-components';
import { FlatList } from 'react-native';
import { GoogleRestaurant } from 'types/Restaurant';

export const RestaurantScreenList = styled(
  FlatList as new (
    props: FlatListProps<GoogleRestaurant>
  ) => FlatList<GoogleRestaurant>
).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
