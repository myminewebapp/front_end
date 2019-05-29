import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import main from './main';
import searchMemory from './searchMemory';
import registers from './registers';
import login from './login';
import profile from './profile';



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
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

{/* <Header />

  <div
    style={{ marginTop: "2%", marginBottom: "2%", textAlign: "left" }}
    class="container"
  >
    <div class="row">
      <Menu />

      <div class="col-6">
        <Postbox />

        <div style={{ overflow: "scroll", height: "50%" }}>
          <Memory />
          <Memory />
          <Memory />
        </div>
      </div>

      <div class="col-3">
        <div
          style={{
            width: "100%",
            height: "300px",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "#707070",
            fontFamily: "prompt",
            fontSize: "90%"
          }}
          class="container"
        >
          date
            </div>
      </div>
    </div>
  </div> */}