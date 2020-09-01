import React from 'react';
import { Switch, Route } from 'react-router';

// Public
import Home from './pages/Public/Home';
import Login from './pages/Public/Login';
import Register from './pages/Public/Register';

// Private
import PrivateRouter from './components/PrivateRouter';

import Menu from './pages/Private/Menu';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/register" exact component={Register} />

    <PrivateRouter  path="/menu" exact component={Menu} />
  </Switch>
);

export default Routes;
