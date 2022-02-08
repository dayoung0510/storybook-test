import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from 'styles/globalStyles';
import 'index.css';
import App from 'App';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#4fb3aa',
      main: '#3c857f',
      dark: '#195a55',
      contrastText: '#fff',
    },
    secondary: {
      light: '#b983c7',
      main: '#8c5a99',
      dark: '#6b3479',
      contrastText: '#fff',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
