import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/login';
import Dashboard from './components/dashboard';
import Registration from './components/registration';
import SideBar from './views/sideBar'

export const Routes = () => {
  return (
    <div>
      {/* <SideBar /> */}
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