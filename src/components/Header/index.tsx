/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  FiUser, FiBookOpen, FiUsers, FiBookmark, FiFilm, FiBook,
} from 'react-icons/fi';

import logoMarvel from '../../assets/MarvelLogo.svg';

import { Container } from './styled';

const Header: React.FC = () => (
  <Container>
    <img src={logoMarvel} alt="Marvel" />

    <div>
      <a href="#">
        <FiUser />
        Characters
      </a>

      <a href="#">
        <FiBookOpen />
        Comics
      </a>

      <a href="#">
        <FiUsers />
        Creators
      </a>

      <a href="#">
        <FiBookmark />
        Events
      </a>

      <a href="#">
        <FiFilm />
        Series
      </a>

      <a href="#">
        <FiBook />
        Stories
      </a>

    </div>
  </Container>
);

export default Header;
