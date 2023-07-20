import { FC, useContext } from 'react';
import { RestaurantScreenList } from './styles';
import { GoogleRestaurant } from 'types/Restaurant';
import ScreenStyledSafeAreaView from 'components/ScreenSafeAreaView';
import { RestaurantsContext } from 'providers/restaurantProvider';
import LoadingScreen from 'components/Loader';
import RestaurantCardInfo from 'components/RestaurantCard/RestaurantCard';
import Search from 'components/Search/Search';

const RestaurantScreen: FC = () => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  return (
    <ScreenStyledSafeAreaView>
      <Search />
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <RestaurantScreenList
          data={restaurants}
          renderItem={({ item }) => <RestaurantCardInfo restaurant={item} />}
          keyExtractor={(restaurant: GoogleRestaurant) => restaurant.name}
        />
      )}
    </ScreenStyledSafeAreaView>
  );
};

export default RestaurantScreen;
