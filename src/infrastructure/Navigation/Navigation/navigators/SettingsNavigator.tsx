import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SettingsScreen, CameraScreen } from 'screens';
import { StackList, TabName } from 'types/Navigation';
import FavouritesNavigator from './FavouritesNavigator';

const { Navigator, Screen } = createStackNavigator<StackList>();

const SettingsNavigator: FC = () => (
  <Navigator
    screenOptions={{
      headerShown: true,
    }}
  >
    <Screen
      name={TabName.settings}
      component={SettingsScreen}
      options={{
        header: () => null,
      }}
    />
    <Screen name={TabName.favouritesMain} component={FavouritesNavigator} />
    <Screen name={TabName.camera} component={CameraScreen} />
  </Navigator>
);

export default SettingsNavigator;
