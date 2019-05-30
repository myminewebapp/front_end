import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import main from './main';
import searchMemory from './searchMemory';
import registers from './registers';
import login from './login';
import profile from './profile';
import lostMemory from './lostMemory';

class App extends Component {
  render(){
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={main} />
          <Route path="/searchMemory" component={searchMemory} />
          <Route path="/registers" component={registers} />
          <Route path="/login" component={login} />
          <Route path="/profile" component={profile} />
          <Route path="/lostMemory" component={lostMemory} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;