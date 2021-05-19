import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import Nav from './Nav';
import About from './About';
import Events from './Events';
import Team from './Team';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Route path='/events' component={Events} />
        <Route path='/about' component={About} />
        <Route path='/team' component={Team} />
      </div>
    </Router>
  );
}

export default App;
