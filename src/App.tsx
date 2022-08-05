import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';

import { Home } from './presentation/home';

import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  )
}


