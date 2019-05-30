import React, { Component } from "react";

class Memory extends Component{
    render(){
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
              marginBottom: "2%"
            }}
            className="container"
          >
            {this.props.msg}
            <br />
            {this.props.date}
            <a href="/" style={{ marginLeft: "70%" }}>
              <i className="fas fa-trash-alt" />
            </a>
            <br />
            <br />
          </div>
        );
    }
}
export default Memory;