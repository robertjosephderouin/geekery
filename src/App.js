import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import Home from './Home';
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
        <Switch>
          <Route path='/' exact component ={Home} />
          <Route path='/events' component={Events} />
          <Route path='/about' component={About} />
          <Route path='/team' component={Team} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
