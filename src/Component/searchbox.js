import React, { Component } from "react";


class searchbox extends Component {
    constructor(props){
      super(props);
    }
    render(props) {
      
      
      var msyt = {
        
        width: "100 %",
fontFamily: "prompt",
fontSize: "90%",
marginBottom: "3%"  
     }
      return (
        <div style={msyt}><input
        style={{width: "100%",
        fontFamily:"prompt",
        fontSize: "100%"}}        type= "text"
        placeholder="ค้นหาความทรงจำ"
      /></div>
   
      );
    }}
    export default searchbox;

