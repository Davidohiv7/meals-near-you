import { TabName } from 'types/Navigation';
import { createScreenOptions } from 'utils/navigation';
import { MapScreen, SettingsScreen } from 'screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RestaurantNavigator from './RestaurantNavigator';
import { FavouritesContextProvider } from 'providers/favouritesProvider';
import { LocationContextProvider } from 'providers/locationProvider';
import { RestaurantsContextProvider } from 'providers/restaurantProvider';
import SettingsNavigator from './SettingsNavigator';

const { Navigator, Screen } = createBottomTabNavigator();

const AppNavigator = () => (
  <FavouritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <Navigator
          screenOptions={createScreenOptions}
          initialRouteName={TabName.restaurant}
        >
          <Screen name={TabName.restaurant} component={RestaurantNavigator} />
          <Screen name={TabName.map} component={MapScreen} />
          <Screen name={TabName.settings} component={SettingsNavigator} />
        </Navigator>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
);

export default AppNavigator;
