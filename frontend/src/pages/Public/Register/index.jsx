import React, { useState } from 'react';

import api from '../../../services/api';

import { RegisterContainer, Form, Title, Field, Button } from './styles';

const Login = () => {


  const [ avatarUrl, setAvatarUrl ] = useState('');
  const [ whatsapp, setWhatsapp ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');

  async function handleRegister(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('As senhas não coincidem');
      return false;
    } else {
      await api.post('/users', {
        avatar_url: avatarUrl,
        whatsapp,
        description,
        username,
        password,
      }).then(response => {
        if (response.status === 200) {
          window.location.href = '/login';
        }
      }).catch(err => alert('Ocorreu um erro no cadastro'))
    }
  }

  return (
    <RegisterContainer>
      <Form onSubmit={handleRegister} >
        <Title>Registrar-se</Title>
        <Field>
          <p>Avatar Url</p>
          <input
            type="url"
            placeholder="http://"
            onChange={ event => setAvatarUrl(event.target.value)}
          />
        </Field>

        <Field>
          <p>Whatsapp</p>
          <input
            type="text"
            placeholder="Digite seu Whatsapp"
            onChange={ event => setWhatsapp(event.target.value)}
          />
        </Field>

        <Field>
          <p>Descrição</p>
          <input
            type="text"
            placeholder="Digite uma breve descrição"
            onChange={ event => setDescription(event.target.value)}
          />
        </Field>

        <Field>
          <p>Username</p>
          <input
            type="text"
            placeholder="Digite seu Username"
            onChange={ event => setUsername(event.target.value)}
          />
        </Field>

        <Field>
          <p>Senha:</p>
          <input
            type="password"
            placeholder="Digite sua Senha"
            onChange={ event => setPassword(event.target.value)}
          />
        </Field>

        <Field>
          <p>Confirme sua senha:</p>
          <input
            type="password"
            placeholder="Confirme sua Senha"
            onChange={ event => setConfirmPassword(event.target.value)}
          />
        </Field>

        <Button type="submit">
          Registrar
        </Button>

      </Form>
    </RegisterContainer>
  );
}

export default Login;
