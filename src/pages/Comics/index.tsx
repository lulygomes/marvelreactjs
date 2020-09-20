import React, { useState, useEffect } from 'react';
import api, { authKey } from '../../services/api';

import { Container, Card } from './styles';

interface ThumbnailDTO{
  path: string;
  extension: string;
}

interface ComicsDTO{
  id: number;
  title: string;
  description: string;
  thumbnail: ThumbnailDTO;
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

  return (
    <Container>
      {comics.map((comic) => (
        <Card key={comic.id}>
          <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
          <h2>{comic.title}</h2>
          <p>{comic.description}</p>
        </Card>
      ))}
    </Container>
  );
};

export default Comics;
