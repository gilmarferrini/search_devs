import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './assets/styles/global';
import DarkTheme from './assets/themes/darkTheme';

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={DarkTheme}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
