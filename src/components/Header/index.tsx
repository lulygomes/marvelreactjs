/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiHeart,
  FiUser,
  FiBookOpen,
  FiUsers,
  FiBookmark,
  FiFilm,
  FiBook,
} from 'react-icons/fi';

import logoMarvel from '../../assets/MarvelLogo1.svg';

import { Container, DevDiv } from './styled';

const Header: React.FC = () => (
  <Container>
    <img src={logoMarvel} alt="Marvel" />

    <div>
      <Link to="/characters">
        <FiUser />
        Characters
      </Link>

      <Link to="/comics">
        <FiBookOpen />
        Comics
      </Link>

      <Link to="/creators">
        <FiUsers />
        Creators
      </Link>

      <Link to="/events">
        <FiBookmark />
        Events
      </Link>

      <Link to="/series">
        <FiFilm />
        Series
      </Link>

      <Link to="/stories">
        <FiBook />
        Stories
      </Link>

    </div>
    <DevDiv>
      <p>
        Desenvolvido com
        {' '}
        <FiHeart />
        {' '}
        por
        <br />
        <strong> Luiz Silva</strong>
      </p>

      <a href="https://github.com/lulygomes">
        <img src="https://avatars0.githubusercontent.com/u/39559790?s=460&u=717ae4781828256277ecda1eb848ad4d04fc0d6d&v=4" alt="Luiz Silva" />
      </a>
    </DevDiv>
  </Container>
);

export default Header;
