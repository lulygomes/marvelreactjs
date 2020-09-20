import React, { useState, useEffect } from 'react';
import api, { authKey } from '../../services/api';

import { Container, Card } from './styles';

interface ThumbnailDTO{
  path: string;
  extension: string;
}

interface StoriesDTO{
  id: number;
  title: string;
  description: string;
  thumbnail: ThumbnailDTO;
  comics: string[];
  stories: string[];
  events: string[];
  series: string[];
}

const Stories: React.FC = () => {
  const [stories, setStories] = useState<StoriesDTO[]>([]);

  useEffect(() => {
    async function getStories(): Promise<void> {
      const response = await api.get(`stories?${authKey}`);
      console.log(response.data.data.results);

      setStories(response.data.data.results);
    }

    getStories();
  }, []);

  return (
    <Container>
      {stories.map((story) => (
        <Card key={story.id}>
          {story.thumbnail && <img src={`${story.thumbnail.path}.${story.thumbnail.extension}`} alt={story.title} />}
          <h2>{story.title}</h2>
          <p>{story.description}</p>
        </Card>
      ))}
    </Container>
  );
};

export default Stories;
