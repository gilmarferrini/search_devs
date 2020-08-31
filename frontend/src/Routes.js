import React from 'react';
import { Switch, Route } from 'react-router';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/register" exact component={Register} />
  </Switch>
);

export default Routes;
