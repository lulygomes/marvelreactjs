/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  FiHeart,
  FiUser,
  FiBookOpen,
  FiUsers,
  FiBookmark,
  FiFilm,
  FiBook,
  FiGithub,
} from 'react-icons/fi';

import logoMarvel from '../../assets/MarvelLogo.svg';

import { Container, DevDiv } from './styled';

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
