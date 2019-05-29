import React, { Component } from "react";


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
            <a href="/">หน้าแรก</a>
          </p>
          <p style={{ marginLeft: "10%" }}>
            <a href="/searchMemory">กล่องความทรงจำ</a>
          </p>
          <p style={{ marginLeft: "10%" }}>
            <a href="/searchMemory">ความทรงจำที่ถูกลบเลือน</a>
          </p>
          <hr />
          <p style={{ marginLeft: "10%" }}>
            <a href="/profile">บัญชีผู้ใช้</a>
          </p>
          <p style={{ marginLeft: "10%" }}>ตั้งค่า</p>
        </div>
      </div>
    );
  }
}
export default Menu;
