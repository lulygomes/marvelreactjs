import React, { useState, useEffect, useCallback } from 'react';
import { FiChevronsDown } from 'react-icons/fi';

import api, { authKey } from '../../services/api';

import { Container, Card, ButtonMore } from './styles';

interface ComicsDTO {
  id: number;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;};
  comics: string[];
  stories: string[];
  events: string[];
  series: string[];
}

const Comics: React.FC = () => {
  const [comics, setComics] = useState<ComicsDTO[]>([]);

  useEffect(() => {
    async function getComics(): Promise<void> {
      const response = await api.get(`comics?${authKey}`);
      console.log(response.data.data.results);

      setComics(response.data.data.results);
    }

    getComics();
  }, []);

  const handleMore = useCallback(async () => {
    try {
      const offset = comics.length;
      const response = await api.get(`comics?offset=${offset}${authKey}`);

      setComics([...comics, ...response.data.data.results]);
    } catch (err) {
      console.log('erro', err);
    }
  }, [comics]);

  return (
    <>
      <Container>
        {comics.map((comic) => (
          <Card key={comic.id} thumbnail={comic.thumbnail}>
            <h2>{comic.title}</h2>
            <p>{comic.description}</p>
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

export default Comics;
