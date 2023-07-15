import { PaperThemeProvider } from 'providers';
import StyledThemeProvider from 'providers/styledThemeProvider';
import { RestaurantScreen } from 'screens';

export default function App() {
  return (
    <StyledThemeProvider>
      <PaperThemeProvider>
        <>
          <RestaurantScreen />
        </>
      </PaperThemeProvider>
    </StyledThemeProvider>
  );
}
