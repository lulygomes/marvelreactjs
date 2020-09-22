import React, { useState, useEffect, useCallback } from 'react';
import { FiChevronsDown } from 'react-icons/fi';

import api, { authKey } from '../../services/api';

import {
  Container, Card, ButtonMore,
} from './styles';

interface ComicsDTO {
  items: {
    name:string;
  }[]
}

interface CharactersDTO {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: {
    items: {
      name: string;
    }[];
  };
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

        setCharacters(response.data.data.results);
      } catch (err) {
        console.log(err);
      }
    }

    getCharacters();
  }, []);

  const handleMore = useCallback(async () => {
    try {
      const offset = characters.length;
      const response = await api.get(`characters?offset=${offset}${authKey}`);

      setCharacters([...characters, ...response.data.data.results]);
    } catch (err) {
      console.log('erro', err);
    }
  }, [characters]);

  return (
    <>
      <Container>
        {characters.map((character) => (
          <Card key={character.id} thumbnail={character.thumbnail}>
            <div id="img" />
            <h2>{character.name}</h2>
            <p>{character.description}</p>
            { character.comics.items.length > 0 ? <h3>Comics: </h3> : ''}
            { character.comics.items.map((comic) => (
              <p key={comic.name}>{comic.name}</p>
            ))}
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
