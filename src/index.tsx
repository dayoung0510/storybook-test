import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from 'styles/globalStyles';
import 'index.css';
import App from 'App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { theme1 } from 'styles/theme';

export const myTheme = createTheme(theme1);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
