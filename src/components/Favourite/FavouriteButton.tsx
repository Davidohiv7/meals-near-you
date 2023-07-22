import { AntDesign } from '@expo/vector-icons';
import { FavouriteButton } from './styles';
import { FC, useContext, useMemo } from 'react';
import { FavouritesContext } from 'providers/favouritesProvider';
import { GoogleRestaurant } from 'types/Restaurant';

type Props = {
  restaurant?: GoogleRestaurant;
};

const Favourite: FC<Props> = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);

  const isFavourite = useMemo(
    () =>
      favourites.find(
        (favourite) => favourite?.placeId === restaurant?.placeId
      ),
    [restaurant?.placeId, favourites]
  );

  if (!restaurant) {
    return <></>;
  }
  return (
    <FavouriteButton
      onPress={() =>
        !isFavourite
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }
    >
      <AntDesign
        name={isFavourite ? 'heart' : 'hearto'}
        size={24}
        color={isFavourite ? 'red' : 'white'}
      />
    </FavouriteButton>
  );
};

export default Favourite;
