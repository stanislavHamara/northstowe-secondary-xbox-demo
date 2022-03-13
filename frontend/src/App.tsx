import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
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

function App() {
  const [games, setGames] = useState<Game[]>()
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('http://localhost:8081/products')
      const data: { data: Game[] } = await result.json()
      setGames(data.data)
    }
    fetchData()
  }, [])
  return (
    <>
      <MenuBar />
      <Container maxWidth="lg" sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {games?.map(d => <Card key={d.game_id} game={d} />)}
      </Container >
    </>
  );
}

export default App;
