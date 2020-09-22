import React, { useState, useEffect, useCallback } from 'react';
import { FiChevronsDown } from 'react-icons/fi';
import api, { authKey } from '../../services/api';

import { Container, Card, ButtonMore } from './styles';

interface ThumbnailDTO {
  path: string;
  extension: string;
}

interface SeriesDTO {
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

  const handleMore = useCallback(async () => {
    try {
      const offset = series.length;
      const response = await api.get(`series?offset=${offset}${authKey}`);

      setSeries([...series, ...response.data.data.results]);
    } catch (err) {
      console.log('erro', err);
    }
  }, [series]);

  return (
    <>
      <Container>
        {series.map((serie) => (
          <Card key={serie.id} thumbnail={serie.thumbnail}>
            <div id="img" />
            <h2>{serie.title}</h2>
            <p>{serie.description}</p>
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

export default Series;
