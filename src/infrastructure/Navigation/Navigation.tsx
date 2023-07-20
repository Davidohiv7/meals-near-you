import { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TabName } from 'types/Navigation';
import { createScreenOptions } from 'utils/navigation';
import { MapScreen, SettingsScreen } from 'screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RestaurantNavigator } from './navigators';

const Tab = createBottomTabNavigator();

const Navigation: FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={createScreenOptions}
        initialRouteName={TabName.restaurant}
      >
        <Tab.Screen name={TabName.restaurant} component={RestaurantNavigator} />
        <Tab.Screen name={TabName.map} component={MapScreen} />
        <Tab.Screen name={TabName.settings} component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
