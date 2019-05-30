import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import main from './main';
import searchMemory from './searchMemory';
import profile from './profile';
import lostMemory from './lostMemory';
import Menu from './Component/menu';
import Calendar from "react-calendar";

class Content extends Component {
  render(){
    return (
        <BrowserRouter>
          <Menu />
          <div class="col-6">
            <Route exact path="/" component={main} />
            <Route path="/searchMemory" component={searchMemory} />
            <Route path="/profile" component={profile} />
            <Route path="/lostMemory" component={lostMemory} />                      
          </div>
          <div class="col-3">
            <div style={{
                width: "100%",
                height: "300px",
                // borderStyle: "solid",
                // borderWidth: "1px",
                // borderColor: "#707070",
                backgroundColor: 'white',
                fontFamily: "prompt",
                fontSize: "90%",
                borderRadius : "15px"
              }} class="container">       
              <Calendar/>
            </div>
          </div>
        </BrowserRouter>
    );
  }
}

export default Content;