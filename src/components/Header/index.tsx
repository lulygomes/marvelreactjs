import React from 'react';

import logoMarvel from '../../assets/MarvelLogo.svg';

import { Container } from './styled';

const Header: React.FC = () => (
  <Container>
    <img src={logoMarvel} alt="Marvel" />

    <div>
      <a href="#">Characters</a>
      <a href="#">Comics</a>
      <a href="#">Creators</a>
      <a href="#">Events</a>
      <a href="#">Series</a>
      <a href="#">Stories</a>
    </div>
  </Container>
);

export default Header;
