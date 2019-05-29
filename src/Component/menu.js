import React, { Component } from "react";

import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';


class Menu extends Component {
  
  render() {
    return (
      <div class="col-3">
        <div
          style={{
            width: "100%",
            height: "540px",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "#707070",
            fontFamily: "prompt",
            fontSize: "90%"
          }}
        >
          <br />
          <p style={{ marginLeft: "10%" }}>
            <i class="material-icons CAA58B">
              home
            </i>
            <a href="/"> หน้าแรก</a>
          </p>
          <p style={{ marginLeft: "10%" }}>
            <i class="material-icons CAA58B">
              inbox
            </i>
            <a href="/searchMemory"> กล่องความทรงจำ</a>
          </p>
          <p style={{ marginLeft: "10%" }}>
            <i class="material-icons CAA58B"> 
              insert_drive_file
            </i>
            <a href="/lostMemory"> ความทรงจำที่ถูกลบเลือน</a>
          </p>
          <hr />
          <p style={{ marginLeft: "10%" }}>
            <i class="material-icons CAA58B">
              person
            </i>
            <a href="/profile"> บัญชีผู้ใช้</a>
          </p>
          <p style={{ marginLeft: "10%" }}> ตั้งค่า</p>
        </div>
      </div>
    );
  }
}
export default Menu;
