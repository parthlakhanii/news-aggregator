import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppRoute from './app.route'
import Dashboard from './views/dashboard'
import Login from './views/login'
// import { Card, Button } from 'react-bootstrap'
import appRoutes from './app.route'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import AppRoutes from './app.route'

function App() {

  return (
    <Login />
    // <Dashboard />
  );
}

export default App;
