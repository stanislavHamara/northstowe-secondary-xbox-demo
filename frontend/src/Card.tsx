import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Game } from './App';
import styled from '@emotion/styled';

const StyledImage = styled('img')({
    marginTop: '1em',
    marginBottom: '1em',
})
export default function BasicCard({ game }: { game: Game }) {
  return (
    <Card sx={{ minWidth: 275, margin: 5 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {game.genre}
        </Typography>
        <Typography variant="h5" component="div">
         {game.name}
        </Typography>
        <StyledImage src={game.thumbnail} width={150} height={200} />
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Rating: {game.rating}/5
        </Typography>
        <Typography variant="body2">
          £{game.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Purchase</Button>
      </CardActions>
    </Card>
  );
}