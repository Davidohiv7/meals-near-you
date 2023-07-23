import React, { FC } from 'react';
import {
  TransitionPresets,
  createStackNavigator,
} from '@react-navigation/stack';
import { FavouritesScreen, RestaurantDetailScreen } from 'screens';
import { StackList, TabName } from 'types/Navigation';

const { Navigator, Screen } = createStackNavigator<StackList>();

const FavouritesNavigator: FC = () => (
  <Navigator
    screenOptions={() => ({
      ...TransitionPresets.ModalPresentationIOS,
      headerShown: false,
    })}
  >
    <Screen name={TabName.favourites} component={FavouritesScreen} />
    <Screen name={TabName.favouriteDetail} component={RestaurantDetailScreen} />
  </Navigator>
);

export default FavouritesNavigator;
