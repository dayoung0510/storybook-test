import Cards from '.';
import { red, lime } from '@mui/material/colors';
import AppBar from 'components/atoms/appBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from 'components/atoms/card';

export default {
  title: 'page/cards',
  component: Cards,
  parameters: {
    themes: {
      default: 'lime',
      list: [
        { name: 'lime', class: ['theme-lime'], color: lime[400] },
        { name: 'red', class: ['theme-red'], color: red[300] },
      ],
    },
  },
};

export const CardsPage = () => {
  return (
    <div>
      <AppBar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Grid>
      </Box>
    </div>
  );
};
