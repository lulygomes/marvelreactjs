import React, { useState, useEffect, useCallback } from 'react';
import { FiChevronsDown } from 'react-icons/fi';

import api, { authKey } from '../../services/api';

import {
  Container, Card, Img, ButtonMore,
} from './styles';

interface CharactersDTO {
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
      try {
        const response = await api.get(`characters?${authKey}`);
        console.log('resposta da api', response);

        setCharacters(response.data.data.results);
        console.log('var Characters', characters);
      } catch (err) {
        console.log(err);
      }
    }

    getCharacters();
  }, []);

  const handleMore = useCallback(async () => {
    try {
      const offset = characters.length;
      console.log('offset', offset);
      const response = await api.get(`characters?offset=${offset}${authKey}`);
      console.log('response', response);

      setCharacters([...characters, ...response.data.data.results]);
    } catch (err) {
      console.log('erro', err);
    }
  }, [characters]);

  return (
    <>
      <Container>
        {characters.map((character) => (
          <Card key={character.id}>
            <Img thumbnail={character.thumbnail} />
            <h2>{character.name}</h2>
            <p>{character.description}</p>
          </Card>
        ))}
      </Container>
      <ButtonMore onClick={handleMore}>
        <FiChevronsDown size={30} />
        Mais
        <FiChevronsDown size={30} />
      </ButtonMore>
    </>
  );
};

export default Characters;
