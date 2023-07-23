import { FC, useContext } from 'react';
import ScreenStyledSafeAreaView from 'components/ScreenSafeAreaView';
import type { StackScreenProps } from '@react-navigation/stack';
import { StackList, TabName } from 'types/Navigation';
import { FavouritesContext } from 'providers/favouritesProvider';
import { RestaurantScreenList } from 'screens/RestaurantScreen/styles';
import { TouchableOpacity } from 'react-native';
import RestaurantCardInfo from 'components/Restaurant/RestaurantCard/RestaurantCard';
import { GoogleRestaurant } from 'types/Restaurant';
import { Text } from 'react-native-paper';
import { NoFavouritesArea } from './styles';
import { FadeInView } from 'components/Animations';

type Props = StackScreenProps<StackList, TabName.favourites>;

const FavouritesScreen: FC<Props> = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  return (
    <ScreenStyledSafeAreaView>
      {favourites?.length ? (
        <FadeInView>
          <RestaurantScreenList
            data={favourites}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(TabName.favouriteDetail, {
                    restaurant: item,
                  })
                }
              >
                <RestaurantCardInfo restaurant={item} />
              </TouchableOpacity>
            )}
            keyExtractor={(restaurant: GoogleRestaurant) => restaurant.name}
          />
        </FadeInView>
      ) : (
        <NoFavouritesArea>
          <Text>No favourites yet</Text>
        </NoFavouritesArea>
      )}
    </ScreenStyledSafeAreaView>
  );
};

export default FavouritesScreen;
