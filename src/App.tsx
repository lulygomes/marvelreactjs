import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Routes from './routes';

import Header from './components/Header';

const App: React.FC = () => (
  <BrowserRouter>
    <Header />
    <Routes />
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
