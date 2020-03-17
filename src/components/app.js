import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom';

import NavigationComponent from './navigation/navigation-container'
import Home from './pages/home';
import Info from './pages/info';
import Contact from './pages/contact';
import About from './pages/about'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Welcome to my awesome Coronavirus Site</h1>
        
        
        <Router>
          <div>
          
            <NavigationComponent />

            <Switch>
              <Route exact path="/" component = {Home} />
              <Route path="/info" component = {Info} />
              <Route path="/contact" component = {Contact} />
              <Route path="/about" component = {About} />
            </Switch>
          </div>
        </Router>

        
          
      </div>
    );
  }
}
