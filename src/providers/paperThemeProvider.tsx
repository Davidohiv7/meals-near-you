import { FC, ReactNode } from 'react';
import { PaperProvider, DefaultTheme } from 'react-native-paper';
import { ThemeProp } from 'react-native-paper/lib/typescript/src/types';
import { colors } from 'style/styledComponentsTheme/colors';

const theme: ThemeProp = {
  ...DefaultTheme,
  roundness: 1,
  colors: {
    ...DefaultTheme.colors,
    elevation: {
      level0: 'transparent',
      level1: 'white',
      level2: 'white',
      level3: 'white',
      level4: 'white',
      level5: 'white',
    },
    primary: colors.brand.secondary,
  },
};

type Props = {
  children: ReactNode;
};

const PaperThemeProvider: FC<Props> = ({ children }) => (
  <PaperProvider theme={theme}>{children}</PaperProvider>
);

export default PaperThemeProvider;
