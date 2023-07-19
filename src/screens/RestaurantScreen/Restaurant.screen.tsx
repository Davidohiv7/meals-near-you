import { Searchbar } from 'react-native-paper';
import { FC, useState } from 'react';
import RestaurantCardInfo, {
  TEST_RESTAURANT,
} from 'components/RestaurantCard/RestaurantCard';
import {
  RestaurantScreenList,
  RestuarantScreenSearchBarContainer,
} from './styles';
import { GoogleRestaurant } from 'types/Restaurant';
import ScreenStyledSafeAreaView from 'components/ScreenSafeAreaView';

const RestaurantScreen: FC = () => {
  const [search, setSearch] = useState('');
  return (
    <ScreenStyledSafeAreaView>
      <RestuarantScreenSearchBarContainer>
        <Searchbar
          value={search}
          elevation={2}
          onChangeText={(text) => setSearch(text)}
        />
      </RestuarantScreenSearchBarContainer>
      <RestaurantScreenList
        data={[
          { ...TEST_RESTAURANT, name: 'Restaurant 1' },
          { ...TEST_RESTAURANT, name: 'Restaurant 2' },
          { ...TEST_RESTAURANT, name: 'Restaurant 3' },
          { ...TEST_RESTAURANT, name: 'Restaurant 4' },
        ]}
        renderItem={({ item }) => <RestaurantCardInfo restaurant={item} />}
        keyExtractor={(restaurant: GoogleRestaurant) => restaurant.name}
      />
    </ScreenStyledSafeAreaView>
  );
};

export default RestaurantScreen;
