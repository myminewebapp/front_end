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
            class="container"
          >
            ดกดกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกหหหหหหหหห
            กกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกก
            กกกกกกกกกกกกกกกกกกกกกก
            <br />
            ส. 01/12/2559
            <a href="#" style={{ marginLeft: "70%" }}>
              <i class="fas fa-trash-alt" />
            </a>
            <br />
            <br />
          </div>
        );
    }
}
export default Memory;