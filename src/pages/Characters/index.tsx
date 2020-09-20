import React, { useState, useEffect } from 'react';
import api, { authKey } from '../../services/api';

import { Container, Card, Img } from './styles';

interface CharactersDTO{
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: string[];
  stories: string[];
  events: string[];
  series: string[];
}

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<CharactersDTO[]>([]);

  useEffect(() => {
    async function getCharacters(): Promise<void> {
      console.log(`characters${authKey}`);
      const response = await api.get(`characters${authKey}`);
      console.log(response.data.data.results);

      setCharacters(response.data.data.results);
    }

    getCharacters();
  }, []);

  return (
    <Container>
      {characters.map((character) => (
        <Card key={character.id}>
          <Img thumbnail={character.thumbnail} />
          <h2>{character.name}</h2>
          <p>{character.description}</p>
        </Card>
      ))}
    </Container>
  );
};

export default Characters;
