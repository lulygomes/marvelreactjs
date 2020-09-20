import React, { useState, useEffect } from 'react';
import api, { authKey } from '../../services/api';

import { Container, Card } from './styles';

interface ThumbnailDTO{
  path: string;
  extension: string;
}

interface SeriesDTO{
  id: number;
  title: string;
  description: string;
  thumbnail: ThumbnailDTO;
  comics: string[];
  stories: string[];
  events: string[];
  series: string[];
}

const Series: React.FC = () => {
  const [series, setSeries] = useState<SeriesDTO[]>([]);

  useEffect(() => {
    async function getSeries(): Promise<void> {
      const response = await api.get(`series?${authKey}`);
      console.log(response.data.data.results);

      setSeries(response.data.data.results);
    }

    getSeries();
  }, []);

  return (
    <Container>
      {series.map((serie) => (
        <Card key={serie.id}>
          <img src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`} alt={serie.title} />
          <h2>{serie.title}</h2>
          <p>{serie.description}</p>
        </Card>
      ))}
    </Container>
  );
};

export default Series;
