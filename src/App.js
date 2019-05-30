import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Component/header';
import Content from './content';
import Login from './login';
import Registers from './registers';

class App extends Component {
  render(){
    return (
        <BrowserRouter>
          <Header />
          <div style={{ marginTop: "2%", marginBottom: "2%", textAlign: "left" }}
               class="container"
          >
            <div class="row">
              <Route exact path="/" component={Content} />
              <Route path="/login" component={Login} />
              <Route path="/registers" component={Registers} />
            </div>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;