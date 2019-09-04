import React, { Component } from 'react';
import { Route  } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';

import './App.css';
import Home from './Home';
import Postjob from './Postjob';
import Login from './Useraccount/Login';
import Pnewjob from './Pnewjob';
import Forgetpassword from './Useraccount/Forgetpassword';
import Forgetotp from './Useraccount/Forgetotp';
import Newpassword from './Useraccount/Newpassword';
import Signup from './Useraccount/Signup';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            
            <Route exact path="/" component={() => (<div className="App"><Home /></div>)} />
            <Route exact path="/Postjob" component={() => (<Postjob />)} />
            <Route exact path="/Useraccount/Login" component={() => (<Login />)} />
            <Route exact path="/Pnewjob" component={() => (<Pnewjob />)} />
            <Route exact path="/Useraccount/Forgetpassword" component={() => (<Forgetpassword />)} />
            <Route exact path="/Useraccount/Forgetotp" component={() => (<Forgetotp />)} />
            <Route exact path="/Useraccount/Newpassword" component={() => (<Newpassword />)} />
            <Route exact path="/Useraccount/Signup" component={() => (<Signup />)} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;