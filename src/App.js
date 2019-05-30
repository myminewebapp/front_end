import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Component/header';
import Content from './content';
import Login from './login';
import Registers from './registers';
import WithAuth from './withAuth';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      account : null
    }
  }
  componentDidMount() {
    fetch('mymine/api/auth/account')
      .then(res => {
        if (res.status === 200) {
          res.json().then(result => {
            // console.log(result);
            this.setState({account : result.account});
          });
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        console.error(err);
      });
  }
  render(){
    return (
        <BrowserRouter>
          <Header account={this.state.account} />
          <div style={{ marginTop: "2%", marginBottom: "2%", textAlign: "left" }}
               className="container"
          >
            <div className="row">
              <Route exact path="/" component={WithAuth(() => <Content account={this.state.account} />)} />
              <Route path="/login" component={Login} />
              <Route path="/registers" component={Registers} />
            </div>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;