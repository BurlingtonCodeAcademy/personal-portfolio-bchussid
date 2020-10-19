import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home.js'
import Nav from './Nav.js';
import About from './About.js';
import Contact from './Contact';
import Code from './Code.js';
import Music from './Music.js';

function App() {
 
  return (
    <Router>
      <body className="main-wrapper">
        <Nav></Nav>
        
        <img src='./pics/Profile-pic.jpg' id='profile-pic' alt='my stupid mug'></img>
        <Switch>
          <Route exact path='/'><Home/> </Route>
          <Route path='/About'><About /> </Route>
          <Route path='/Code' component={Code} />
          <Route path='/Music' component={Music} />
          <Route path='/Contact' component={Contact} />
        </Switch>
      </body>
    </Router>
  );
}

export default App;
