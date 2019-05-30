import React, { Component } from "react";
import Memory from "./Component/memory";

class searchMemory extends Component {
  render() {
    return (
      <div style={{ overflow: "scroll", height: "50%" }}>
        <Memory />
        <Memory />
        <Memory />
        <Memory />
        <Memory />
        <Memory />
        <Memory />
        <Memory />
        <Memory />
        <Memory />
        <Memory />
      </div>  
    );
  }
}
export default searchMemory;
