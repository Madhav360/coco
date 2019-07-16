import React, { Component } from 'react';
import { Route  } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Postjob from './Postjob';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            
            <Route exact path="/" component={() => (<div className="App"><Home /></div>)} />
            <Route exact path="/Postjob" component={() => (<Postjob />)} />
            <Route exact path="/Login" component={() => (<Login />)} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;