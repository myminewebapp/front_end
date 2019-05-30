import React, { Component } from "react";
import Popup from 'reactjs-popup'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Icon } from "@material-ui/core";


class Postbox extends Component {
  
  render() {
    var msyt = {
      
      fontSize :  30
   }
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
        
      >
        
        <textarea
          style={{ marginBottom: "2%" }}
          class="form-control"
          rows="3"
        />
  <Grid container spacing={3}>

    <Grid item xs={6}>
        <button style={{ backgroundColor: "#CAA58B", color: "white", margin: 5}}>
          เพิ่มรูปภาพ/วิดีโอ
        </button>
    </Grid>

        <Grid item xs={6}>
      <div
        
        className={'tooltipBoundary'}
      >
        <Popup     trigger={
            
          <button style={{ float: "right", margin: 5}} className="card"> บันทึก </button>
               
        }
          position="bottom right"
          closeOnDocumentClick
          keepTooltipInside=".tooltipBoundary">

    <div>
    <h5>
    เลือกอารมณ์
    </h5>
    <t>
    <i style={msyt} class="far fa-tired"></i>
    <i style={msyt} class="far fa-surprise"></i>
    <i style={msyt} class="far fa-smile-beam"></i>
    <i style={msyt} class="far fa-sad-tear"></i>
    <i style={msyt} class="far fa-laugh-squint"></i>
    <i style={msyt} class="far fa-grin-hearts"></i>
    <i style={msyt} class="far fa-frown"></i>
    <i style={msyt} class="far fa-angry"></i>
    <i style={msyt} class="far fa-dizzy"></i>
    </t>

    </div>
  </Popup>
         
        
      
        


        
      </div>
         
  
        </Grid>
        
  </Grid>



      </div>
    );
  }
}

class iicon extends Component {
  constructor(props){
    super(props);
  }
  render(props) {
    
    
    var msyt = {
      
      fontSize :  "30"   
   }
    return (
      <i style = {msyt} class = {this.props.name}></i>
 
    );
  }}
export default Postbox;
