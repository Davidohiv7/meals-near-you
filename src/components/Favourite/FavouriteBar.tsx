import Spacer, { SpacerSize, SpacerVariant } from 'components/Spacer';
import { FavouritesContext } from 'providers/favouritesProvider';
import { FC, useContext } from 'react';
import { Text } from 'react-native';
import { FavouritesTitle, FavouritesWrapper } from './styles';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CompactRestaurantInfo from 'components/Restaurant/CompactRestaurantInfo/CompactRestaurantInfo';
import { StackScreenProps } from '@react-navigation/stack';
import { StackList, TabName } from 'types/Navigation';

type Props = {
  navigate: StackScreenProps<
    StackList,
    TabName.restaurant
  >['navigation']['navigate'];
};

const FavouriteBar: FC<Props> = ({ navigate }) => {
  const { favourites } = useContext(FavouritesContext);
  if (!favourites.length) {
    return null;
  }

  return (
    <FavouritesWrapper>
      <Spacer size={SpacerSize.lg} variant={SpacerVariant.left}>
        <FavouritesTitle>Favourites</FavouritesTitle>
      </Spacer>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer size={SpacerSize.md} variant={SpacerVariant.left}>
              <TouchableOpacity
                onPress={() =>
                  navigate(TabName.restaurantDetail, {
                    restaurant,
                  })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};

export default FavouriteBar;
