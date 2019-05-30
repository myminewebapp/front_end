import React, { Component } from "react";
import { NavLink, Link } from 'react-router-dom';


class Menu extends Component {

  render() {
    return (
      <div class="col-3">
        <div
          style={{
            width: "100%",
            height: "540px",
            // borderStyle: "solid",
            // borderWidth: "1px",
            // borderColor: "#707070",
            backgroundColor: 'white',
            fontFamily: "prompt",
            fontSize: "90%",
            borderRadius : "15px"
          }}
        >
          <br />
          <LinkMenu url="/" linkName="หน้าแรก" />
          <LinkMenu url="/searchMemory" linkName="กล่องความทรงจำ" />
          <LinkMenu url="/lostMemory" linkName="ความทรงจำที่ถูกลบเลือน" />
          <hr />
          <LinkMenu url="/profile" linkName="บัญชีผู้ใช้" />
          <LinkMenu url="#" linkName="ตั้งค่า" />
        </div>
      </div>
      
    );
  }
}

export default Menu;

class LinkMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <p style={{ marginLeft: "10%" }}>
        <NavLink exact to={this.props.url} activeStyle={{ color: '#be9273', fontWeight: 'bold' }}>{this.props.linkName}</NavLink>
      </p>
    );
  }
}