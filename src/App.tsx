import React from 'react';

import GlobalStyle from './styles/global';

import Header from './components/Header';

const App: React.FC = () => (
  <>
    <Header />
    <h1>
      Olá mundo
    </h1>

    <GlobalStyle />
  </>
);

export default App;
