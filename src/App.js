import React, { Component } from 'react';
import { Route  } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';

import './App.css';
import Home from './Home';
import Postjob from './Postjob';
import Login from './Login';
import Pnewjob from './Pnewjob';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            
            <Route exact path="/" component={() => (<div className="App"><Home /></div>)} />
            <Route exact path="/Postjob" component={() => (<Postjob />)} />
            <Route exact path="/Login" component={() => (<Login />)} />
            <Route exact path="/Pnewjob" component={() => (<Pnewjob />)} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;