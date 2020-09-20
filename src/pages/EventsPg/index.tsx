import React, { useState, useEffect, useCallback } from 'react';
import { FiChevronsDown } from 'react-icons/fi';

import api, { authKey } from '../../services/api';

import {
  Container, Card, ButtonMore,
} from './styles';

interface EventsDTO {
  id: number;
  title: string;
  description: string;
  thumbnail:{
    path: string;
    extension: string;
  };
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
  const handleMore = useCallback(async () => {
    try {
      const offset = events.length;
      const response = await api.get(`events?offset=${offset}${authKey}`);

      setEvents([...events, ...response.data.data.results]);
    } catch (err) {
      console.log('erro', err);
    }
  }, [events]);
  return (
    <>
      <Container>
        {events.map((event) => (
          <Card key={event.id} thumbnail={event.thumbnail}>
            <div id="img" />
            <h2>{event.title}</h2>
            <p>{event.description}</p>
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

export default Events;
