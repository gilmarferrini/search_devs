import React, { useState, useEffect } from 'react';

import api from '../../../services/api';

import Header from '../../../components/Header';
import { Link } from 'react-router-dom';
import { MenuContainer, Profile, Card } from './styles';

const Menu = () => {
  const [ users, setUsers ] = useState([]);
  const [ userData, setUserData ] = useState({});


  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');

  async function loadUsers() {
    api.get('/users', {
      headers : {
        authorization: token,
      }
    }).then( response => {
      setUsers([...response.data])
    }).catch(err => console.log(err));
  }

  async function loadUser() {
    api.get(`/users/${userId}`, {
      headers : {
        authorization: token,
      }
    }).then( response => {
      setUserData({...response.data});
    }).catch(err => console.log(err));
  }

  function logout() {
    localStorage.clear();
    window.location.href = '/';
  }

  useEffect(() => {
    loadUsers()
    loadUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header>
        <Link to="/">Home</Link>
        {
          userData.user !== undefined ? (
            <Profile>
              <img src={`${userData.user.avatar_url}`} alt={`Foto de ${userData.user.username}`} />
              <p>{userData.user.username}</p>
            </Profile>
          ) : (
            <Profile>
              <img src={`${userData.avatar_url}`} alt={`...Carregando`} />
            </Profile>
          )
        }
      </Header>
      <MenuContainer>
        <h1>Desenvolvedores Disponíveis <button type="button" onClick={() => logout()}>Deslogar</button></h1>
        {
          users.length !== 0 ? (
            users.map(user => (
              <Card key={user.id}>
                <img src={user.avatar_url} alt=""/>

                <h3>Username: {user.username}</h3>

                <article>Descrição: {user.description}</article>

                <span>
                  <a
                    href={`https://wa.me/${user.whatsapp}`}
                    target="_blank"
                  >
                    Whatsapp
                  </a>
                </span>
              </Card>
            ))
          ) : ( '' )
        }
      </MenuContainer>
    </>
  );
}

export default Menu
;
