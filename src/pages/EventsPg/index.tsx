import React, { useState, useEffect } from 'react';
import api, { authKey } from '../../services/api';

import { Container, Card } from './styles';

interface ThumbnailDTO{
  path: string;
  extension: string;
}

interface EventsDTO{
  id: number;
  title: string;
  description: string;
  thumbnail: ThumbnailDTO;
  comics: string[];
  stories: string[];
  events: string[];
  series: string[];
}

const Events: React.FC = () => {
  const [events, setEvents] = useState<EventsDTO[]>([]);

  useEffect(() => {
    async function getEvents(): Promise<void> {
      const response = await api.get(`events?${authKey}`);
      console.log(response.data.data.results);

      setEvents(response.data.data.results);
    }

    getEvents();
  }, []);

  return (
    <Container>
      {events.map((event) => (
        <Card key={event.id}>
          <img src={`${event.thumbnail.path}.${event.thumbnail.extension}`} alt={event.title} />
          <h2>{event.title}</h2>
          <p>{event.description}</p>
        </Card>
      ))}
    </Container>
  );
};

export default Events;
