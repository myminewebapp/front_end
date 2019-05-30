import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './main';
import SearchMemory from './searchMemory';
import Profile from './profile';
import LostMemory from './lostMemory';
import Menu from './Component/menu';
import Calendar from "react-calendar";

class Content extends Component {
  render(){
    let account = null;
    if(this.props.account !== null){
      account = this.props.account;
    }
    return (
      <BrowserRouter>
        <Menu account={account}/>
        <div className="col-6">
          <Route exact path="/" component={() => <Main account={account} />} />
          <Route path="/searchMemory" component={() => <SearchMemory account={account} />} />
          <Route path="/profile" component={() => <Profile account={account} />} />
          <Route path="/lostMemory" component={() => <LostMemory account={account} />} />                      
        </div>
        <div className="col-3">
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
            }} className="container">       
            <Calendar/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Content;