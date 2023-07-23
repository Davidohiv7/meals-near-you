import { PaperThemeProvider } from 'providers';
import StyledThemeProvider from 'providers/styledThemeProvider';
import { initializeApp } from 'firebase/app';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { RestaurantsContextProvider } from 'providers/restaurantProvider';
import { LocationContextProvider } from 'providers/locationProvider';
import Navigation from 'infrastructure/Navigation';
import { FavouritesContextProvider } from 'providers/favouritesProvider';
import { FIREBASE_AUTH } from 'config/firebase';
import { AuthContextProvider } from 'providers/authProvider';

initializeApp(FIREBASE_AUTH);

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
        <AuthContextProvider>
          <Navigation />
        </AuthContextProvider>
      </PaperThemeProvider>
    </StyledThemeProvider>
  );
}
