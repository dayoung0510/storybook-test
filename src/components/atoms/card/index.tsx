import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

type Props = { text?: string };

export const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  border: `1px solid ${theme.palette.primary.light}`,
  color: theme.palette.primary.main,
  boxShadow: 'none',
  height: '100%',
}));

const MyCard: React.FC<Props> = ({ text }) => {
  return (
    <>
      <Grid item xs={12} md={6} lg={4}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image="https://picsum.photos/400/200?random=1"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {text}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
};

export default MyCard;
