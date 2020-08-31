import React from 'react';

import { LoginContainer, Form, Title, Field, Button } from './styles';

const Login = () => {
  return (
    <LoginContainer>
      <Form>
        <Title>Login</Title>
        <Field>
          <p>Usuário</p>
          <input type="text" placeholder="Digite seu Usuário" />
        </Field>

        <Field>
          <p>Senha</p>
          <input type="text" placeholder="Digite sua Senha" />
        </Field>

        <Button type="submit">
          Entrar
        </Button>

      </Form>
    </LoginContainer>
  );
}

export default Login;
