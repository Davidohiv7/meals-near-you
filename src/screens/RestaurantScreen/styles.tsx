import { View, FlatListProps } from 'react-native';
import { styled } from 'styled-components';
import { FlatList } from 'react-native';
import { GoogleRestaurant } from 'types/Restaurant';

export const RestuarantScreenSearchBarContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantScreenList = styled(
  FlatList as new (
    props: FlatListProps<GoogleRestaurant>
  ) => FlatList<GoogleRestaurant>
).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
