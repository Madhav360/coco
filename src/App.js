import React, { Component } from 'react';
import { Route  } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Postjob from './Postjob';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            
            <Route exact path="/" component={() => (<div className="App"><Home /></div>)} />
            <Route exact path="/Postjob" component={() => (<Postjob />)} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;