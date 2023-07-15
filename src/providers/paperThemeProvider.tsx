import { FC, ReactNode } from 'react';
import { PaperProvider, DefaultTheme } from 'react-native-paper';
import { ThemeProp } from 'react-native-paper/lib/typescript/src/types';

const theme: ThemeProp = {
  ...DefaultTheme,
  roundness: 1,
  colors: {
    ...DefaultTheme.colors,
  },
};

type Props = {
  children: ReactNode;
};

const PaperThemeProvider: FC<Props> = ({ children }) => (
  <PaperProvider theme={theme}>{children}</PaperProvider>
);

export default PaperThemeProvider;
