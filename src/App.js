import React, { Component } from 'react';
import { Route  } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';

import './App.css';
import Home from './Home';
import Productdesciption from './Productdesciption'
import Userdetails from './Userdetails';
import Productvalidity from './Productvalidity';
class App extends Component {

  state = {
    contacts: []
};

componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => {
            this.setState({ contacts: data })
        })
        .catch(console.log)
}

  render() {
    return (
      <BrowserRouter>
          <Switch>
            
            <Route exact path="/" component={() => (<div className="App"><Home /></div>)} />
            <Route exact path="/Productdesciption" component={() => (<div className="App"><Productdesciption /></div>)} />
            <Route exact path="/userdetails" component={() => (<div className="App"><Userdetails /></div>)} />
            <Route exact path="/productvalidity" component={() => (<div className="App"><Productvalidity /></div>)} />
            
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;