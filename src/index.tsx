import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from 'styles/globalStyles';
import 'index.css';
import App from 'App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red, lime } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      light: lime[200],
      main: lime[400],
      dark: lime[600],
      contrastText: '#fff',
    },
    secondary: {
      light: red[100],
      main: red[300],
      dark: red[500],
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
