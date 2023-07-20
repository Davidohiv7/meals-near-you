import { PaperThemeProvider } from 'providers';
import StyledThemeProvider from 'providers/styledThemeProvider';
import { MapScreen, RestaurantScreen, SettingsScreen } from 'screens';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabName } from 'types/Navigation';
import { createScreenOptions } from 'utils/navigation';
import { RestaurantsContextProvider } from 'providers/restaurantProvider';
import { LocationContextProvider } from 'providers/locationProvider';

const Tab = createBottomTabNavigator();

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <StyledThemeProvider>
      <PaperThemeProvider>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <Tab.Navigator
                screenOptions={createScreenOptions}
                initialRouteName={TabName.restaurant}
              >
                <Tab.Screen
                  name={TabName.restaurant}
                  component={RestaurantScreen}
                />
                <Tab.Screen name={TabName.map} component={MapScreen} />
                <Tab.Screen
                  name={TabName.settings}
                  component={SettingsScreen}
                />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </PaperThemeProvider>
    </StyledThemeProvider>
  );
}
