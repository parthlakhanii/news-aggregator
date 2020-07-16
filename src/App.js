import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './views/dashboard'
import { Card, Button } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import AppRoutes from './app.route'

function App() {

  return (
      <Dashboard />
  );
}

export default App;
