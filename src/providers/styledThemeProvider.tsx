import { ThemeProvider } from 'styled-components';
import { FC, ReactNode } from 'react';
import theme from 'style/styledComponentsTheme';

type Props = {
  children: ReactNode;
};

const StyledThemeProvider: FC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default StyledThemeProvider;
