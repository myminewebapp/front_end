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
    let timeline = [];
    let account = this.props.account;
    if(account !== null){
      fetch('mymine/api/timeline/'+account._id)
      .then(res => {
        if (res.status === 200) {
          res.json().then(result => {
            console.log(result);
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
    return (
      <BrowserRouter>
        {/* {this.props.account.firstName} */}
        <Menu />
        <div className="col-6">
          <Route exact path="/" component={main} />
          <Route path="/searchMemory" component={searchMemory} />
          <Route path="/profile" component={profile} />
          <Route path="/lostMemory" component={lostMemory} />                      
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