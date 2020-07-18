import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './views/login';
import Dashboard from './views/dashboard';
import Registration from './views/registration';

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/">
          <Redirect to="/Login" />
        </Route>
        <Route exact path="/Registration" component={Registration} />
      </Switch>
    </div>
  );
};