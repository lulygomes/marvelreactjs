import React, { useState, useEffect, useCallback } from 'react';
import { FiChevronsDown } from 'react-icons/fi';
import api, { authKey } from '../../services/api';

import { Container, Card, ButtonMore } from './styles';

interface ThumbnailDTO {
  path: string;
  extension: string;
}

interface CreatorsDTO {
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
      const response = await api.get(`creators?${authKey}`);
      console.log(response.data.data.results);

      setCreators(response.data.data.results);
    }

    getCreators();
  }, []);

  const handleMore = useCallback(async () => {
    try {
      const offset = creators.length;
      const response = await api.get(`creators?offset=${offset}${authKey}`);

      setCreators([...creators, ...response.data.data.results]);
    } catch (err) {
      console.log('erro', err);
    }
  }, [creators]);

  return (
    <>
      <Container>
        {creators.map((creator) => (
          <Card key={creator.id}>
            <img src={`${creator.thumbnail.path}.${creator.thumbnail.extension}`} alt={creator.fullName} />
            <h2>{creator.fullName}</h2>
            <p>{creator.description}</p>
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

export default Creators;
