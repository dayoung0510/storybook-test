import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from 'components/atoms/card';
import { dummyText } from '../dummyText';

const Cards: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {dummyText.map((text) => (
          <Card text={text} />
        ))}
      </Grid>
    </Box>
  );
};

export default Cards;
