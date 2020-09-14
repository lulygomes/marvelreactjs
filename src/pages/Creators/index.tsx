import React, { useState, useEffect } from 'react';
import api, { authKey } from '../../services/api';

import { Container, Card } from './styles';

interface ThumbnailDTO{
  path: string;
  extension: string;
}

interface CreatorsDTO{
  id: number;
  fullName: string;
  description: string;
  thumbnail: ThumbnailDTO;
  comics: string[];
  stories: string[];
  events: string[];
  series: string[];
}

const Creators: React.FC = () => {
  const [creators, setCreators] = useState<CreatorsDTO[]>([]);

  useEffect(() => {
    async function getCreators(): Promise<void> {
      const response = await api.get(`creators${authKey}`);
      console.log(response.data.data.results);

      setCreators(response.data.data.results);
    }

    getCreators();
  }, []);

  return (
    <Container>
      {creators.map((creator) => (
        <Card key={creator.id}>
          <img src={`${creator.thumbnail.path}.${creator.thumbnail.extension}`} alt={creator.fullName} />
          <h2>{creator.fullName}</h2>
          <p>{creator.description}</p>
        </Card>
      ))}
    </Container>
  );
};

export default Creators;
