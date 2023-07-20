import { PaperThemeProvider } from 'providers';
import StyledThemeProvider from 'providers/styledThemeProvider';

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { RestaurantsContextProvider } from 'providers/restaurantProvider';
import { LocationContextProvider } from 'providers/locationProvider';
import Navigation from 'infrastructure/Navigation';

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
            <Navigation />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </PaperThemeProvider>
    </StyledThemeProvider>
  );
}
