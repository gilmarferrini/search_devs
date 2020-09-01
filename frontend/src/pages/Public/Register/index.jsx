import React from 'react';

import { RegisterContainer, Form, Title, Field, Button } from './styles';

const Login = () => {
  return (
    <RegisterContainer>
      <Form>
        <Title>Registrar-se</Title>
        <Field>
          <p>Avatar Url</p>
          <input type="url" placeholder="http://" />
        </Field>

        <Field>
          <p>Username</p>
          <input type="text" placeholder="Digite seu Username" />
        </Field>

        <Field>
          <p>Senha</p>
          <input type="text" placeholder="Digite sua Senha" />
        </Field>

        <Field>
          <p>Whatsapp</p>
          <input type="text" placeholder="Digite seu Whatsapp" />
        </Field>

        <Button type="submit">
          Registrar
        </Button>

      </Form>
    </RegisterContainer>
  );
}

export default Login;
