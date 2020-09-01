import React, { useState } from 'react';
import api from '../../../services/api';
import isAuthenticated from '../../../services/isAuthenticated';

import { LoginContainer, Form, Title, Field, Button, MessageError } from './styles';

const Login = () => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ loginError, setLoginError] = useState(false);

  async function handleLogin(event) {
    event.preventDefault();

    await api.post('/users/login', {
      username,
      password,
    }).then(response => {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.id);
      window.location.href = '/menu';

    }).catch(err => {
      setLoginError(true);
    })
  }

  return (
    isAuthenticated() ? (
      window.location.href = '/menu'
    ) : (
      <LoginContainer>
        <Form onSubmit={handleLogin}>
          <Title>Login</Title>
          <Field>
            <p>Usuário</p>
            <input
              type="text"
              placeholder="Digite seu Usuário"
              onChange={event => setUsername(event.target.value)}
            />
          </Field>

          <Field>
            <p>Senha</p>
            <input
              type="password"
              placeholder="Digite sua Senha"
              onChange={event => setPassword(event.target.value)}
            />
          </Field>

          {loginError ? (
            <Field>
              <MessageError>Credenciais incorretas</MessageError>
            </Field>
            ) : ''
          }

          <Button type="submit">
            Entrar
          </Button>

        </Form>
      </LoginContainer>
    )
  );
}

export default Login;
