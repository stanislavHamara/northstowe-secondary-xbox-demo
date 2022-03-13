import { Container } from '@mui/material';
import React from 'react';
import MenuBar from './AppBar';
import Card from './Card';

export interface Game {
  game_id: number
  name: string
  genre: string
  rating: number
  price: number
  thumbnail: string
}

const data: Game[] =
  [
    {
      game_id: 5,
      name: "Minecraft",
      genre: "Sandbox",
      rating: 5,
      price: 16.99,
      thumbnail: "https://store-images.s-microsoft.com/image/apps.17382.13510798887677013.afcc99fc-bdcc-4b9c-8261-4b2cd93b8845.49beb011-7271-4f15-a78b-422c511871e4"
    },
    {
      game_id: 6,
      name: "Fortnite",
      genre: "Battle Royal",
      rating: 4,
      price: 0,
      thumbnail: "https://store-images.s-microsoft.com/image/apps.39238.70702278257994163.4910f501-2606-4c0a-84fb-50502b8d026f.c9b8643b-ade8-425d-b23f-565be7d926bf"
    },
    {
      game_id: 7,
      name: "Sims 4",
      genre: "Simulation",
      rating: 3,
      price: 34.99,
      thumbnail: "https://store-images.s-microsoft.com/image/apps.53697.64737940845214615.82a9a5cd-32c5-4fb1-a951-2a7b976ad460.f0e0779f-450f-421f-b0c6-7b04bf25fa60"
    },
    {
      game_id: 8,
      name: "Forza Horizon 5",
      genre: "Racing",
      rating: 4,
      price: 69.99,
      thumbnail: "https://store-images.s-microsoft.com/image/apps.7859.14506879174941978.138d3eab-0b06-443b-a252-c99592521394.33a348aa-892d-49b8-9ef2-6ff06c22cf96"
    }
  ]


function App() {
  return (
    <>
      <MenuBar />
      <Container maxWidth="lg" sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {data.map(d => <Card game={d} />)}
      </Container >
    </>
  );
}

export default App;
