import { TabName } from 'types/Navigation';
import { createScreenOptions } from 'utils/navigation';
import { CheckoutScreen, MapScreen } from 'screens';
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
          <Screen
            name={TabName.restaurantMain}
            component={RestaurantNavigator}
          />
          <Screen name={TabName.checkout} component={CheckoutScreen} />
          <Screen name={TabName.map} component={MapScreen} />
          <Screen name={TabName.settingsMain} component={SettingsNavigator} />
        </Navigator>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
);

export default AppNavigator;
