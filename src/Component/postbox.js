import React, { Component } from "react";
// import { makeStyles } from '@material-ui/core/styles';
// import Fab from '@material-ui/core/Fab';
// import AddIcon from '@material-ui/icons/Add';
// import Icon from '@material-ui/core/Icon';
// import DeleteIcon from '@material-ui/icons/Delete';
// import NavigationIcon from '@material-ui/icons/Navigation';


class Postbox extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          // borderStyle: "solid",
          // borderWidth: "1px",
          // borderColor: "#707070",
          backgroundColor: 'white',
          fontFamily: "prompt",
          fontSize: "90%",
          borderRadius : "15px",
          marginBottom: "3%"
        }}
        className="container"
      >
        <br />
        <textarea
          style={{ marginBottom: "2%" }}
          className="form-control"
          rows="3"
        />
        

        <button style={{ backgroundColor: "#CAA58B", color: "white" }} type="button" className="btn btn-secondary">
          เพิ่มรูปภาพ/วิดีโอ</button>

        {/* <button style={{ backgroundColor: "#CAA58B", color: "white" }}>
          เพิ่มรูปภาพ/วิดีโอ
        </button> */}
        
        <button style={{
            backgroundColor: "#CAA58B",
            color: "white",
            marginLeft: "59%"
          }} type="button" className="btn btn-secondary">บันทึก</button>

        
        {/* <button style={{ backgroundColor: "#CAA58B",color: "white",marginLeft: "63%"}}>
          บันทึก
        </button> */}
        <br />
        <br />
      </div>
    );
  }
}
export default Postbox;
