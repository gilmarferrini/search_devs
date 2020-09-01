import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../../components/Header';
import { HomeContainer, Actions, Main } from './styles';

const Home = () => {
  return (
    <>
      <HomeContainer>
        <Header>
          <Link to="/">Home</Link>
          <Actions>
            <Link to="/login">
              Login
            </Link>
            <Link to="/register">
              Registrar-se
            </Link>
          </Actions>
        </Header>
        <Main>
          <h1>Home</h1>
        </Main>
      </HomeContainer>
    </>
  );
}

export default Home;
