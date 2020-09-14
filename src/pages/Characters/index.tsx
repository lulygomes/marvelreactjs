import React, { useState, useEffect } from 'react';
import api, { authKey } from '../../services/api';

// interface CharactersDTO{
//   id: number;
//   name: string;
//   description: string;
// }

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState();

  useEffect(() => {
    async function getCharacters(): Promise<void> {
      console.log(`characters${authKey}`);
      const response = await api.get(`characters${authKey}`);

      console.log(response.data.data);
    }

    getCharacters();
  }, []);

  return (
    <h1>Characters</h1>
  );
};

export default Characters;
