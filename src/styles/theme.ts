import { indigo, blue } from '@mui/material/colors';

export const theme1 = {
  palette: {
    primary: {
      light: '#E5646D',
      main: '#EB2835',
      dark: '#AE020E',
      contrastText: '#fff',
    },
    secondary: {
      light: '#85D6D3',
      main: '#37DED8',
      dark: '#05C5BF',
      contrastText: '#fff',
    },
  },
};

export const theme2 = {
  palette: {
    primary: {
      light: indigo[200],
      main: indigo[400],
      dark: indigo[600],
      contrastText: '#fff',
    },
    secondary: {
      light: blue[100],
      main: blue[300],
      dark: blue[500],
      contrastText: '#fff',
    },
  },
};
