import { FC, useContext } from 'react';
import { RestaurantScreenList } from './styles';
import { GoogleRestaurant } from 'types/Restaurant';
import ScreenStyledSafeAreaView from 'components/ScreenSafeAreaView';
import { RestaurantsContext } from 'providers/restaurantProvider';
import LoadingScreen from 'components/Loader';
import RestaurantCardInfo from 'components/RestaurantCard/RestaurantCard';
import Search from 'components/Search/Search';
import type { StackScreenProps } from '@react-navigation/stack';
import { StackList, TabName } from 'types/Navigation';
import { TouchableOpacity } from 'react-native';

type Props = StackScreenProps<StackList, TabName.restaurant>;

const RestaurantScreen: FC<Props> = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  return (
    <ScreenStyledSafeAreaView>
      <Search />
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <RestaurantScreenList
          data={restaurants}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(TabName.restaurantDetail, {
                  restaurant: item,
                })
              }
            >
              <RestaurantCardInfo restaurant={item} />
            </TouchableOpacity>
          )}
          keyExtractor={(restaurant: GoogleRestaurant) => restaurant.name}
        />
      )}
    </ScreenStyledSafeAreaView>
  );
};

export default RestaurantScreen;
