import { FavouritesContext } from 'providers/favouritesProvider';
import { useContext } from 'react';
import { Text } from 'react-native';

const FavouriteBar = () => {
  const { favourites } = useContext(FavouritesContext);
  return <Text>Favourites Bar</Text>;
};

export default FavouriteBar;
