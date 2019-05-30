import React, { Component } from "react";
import {NavLink ,Link } from 'react-router-dom';

class Menu extends Component {
  
  render() {
    return (
      
      
      <div class="card" style={{width: "18rem"}}>
        
    
  <ul class="list-group list-group-flush"           
          style={{
            fontFamily: "prompt",
            fontSize: "90%"
          }}>
    <li class="list-group-item"><LinkMenu url="/" linkName="หน้าแรก"/></li>
    <li class="list-group-item"><LinkMenu url="/searchMemory" linkName="กล่องความทรงจำ"/></li>
    <li class="list-group-item"><LinkMenu url="/lostMemory" linkName="ความทรงจำที่ถูกลบเลือน"/></li>
    <li class="list-group-item"><LinkMenu url="/profile" linkName="บัญชีผู้ใช้"/></li>
    <li class="list-group-item"><LinkMenu url="#" linkName="ตั้งค่า"/> </li>
  </ul>
  
      </div>


      
    );
  }
}

export default Menu;

class LinkMenu extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return ( 
      <p style={{ marginLeft: "10%" }}>
        <NavLink exact to={this.props.url} activeStyle={{ color: '#be9273', fontWeight: 'bold'}}>{this.props.linkName}</NavLink>
      </p>
    );
  }
}

