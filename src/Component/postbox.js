import React, { Component } from "react";

class Postbox extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: "#707070",
          fontFamily: "prompt",
          fontSize: "90%",
          marginBottom: "3%"
        }}
        class="container"
      >
        <br />
        <textarea
          style={{ marginBottom: "2%" }}
          class="form-control"
          rows="3"
        />
        <button style={{ backgroundColor: "#CAA58B", color: "white" }}>
          เพิ่มรูปภาพ/วิดีโอ
          
        </button>
        
        <button
          style={{
            backgroundColor: "#CAA58B",
            color: "white",
            marginLeft: "63%"
          }}
        >
          บันทึก
        </button>
        <br />
        <br />
      </div>
    );
  }
}
export default Postbox;
