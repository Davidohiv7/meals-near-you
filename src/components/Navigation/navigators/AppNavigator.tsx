import { FC, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TabName } from 'types/Navigation';
import { createScreenOptions } from 'utils/navigation';
import { MapScreen, SettingsScreen } from 'screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RestaurantNavigator from './RestaurantNavigator';

const { Navigator, Screen } = createBottomTabNavigator();

const AppNavigator = () => (
  <Navigator
    screenOptions={createScreenOptions}
    initialRouteName={TabName.restaurant}
  >
    <Screen name={TabName.restaurant} component={RestaurantNavigator} />
    <Screen name={TabName.map} component={MapScreen} />
    <Screen name={TabName.settings} component={SettingsScreen} />
  </Navigator>
);

export default AppNavigator;
