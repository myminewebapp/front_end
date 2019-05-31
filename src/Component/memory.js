import React, { Component } from "react";

class Memory extends Component{
    deleteBtn = () => {
      fetch('/mymine/api/memory/'+ this.props.id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
          if (res.status === 200) {
              // this.props.history.push('/');
              // window.location = "/";
              console.log(res);
              alert('Delete Complete');
          } else {
              const error = new Error(res.error);
              throw error;
          }
      })
      .catch(err => {
          console.error(err);
          //alert('Error logging in please try again');
      });
    }
    render(){
        let date = new Date(this.props.date);
        const monthNames = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ];
        const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let newDate = weekday[date.getDay()] + ' ' + date.getDate() + ' ' + monthNames[date.getMonth()] + ' ' + date.getFullYear()
             + ' ' + date.getHours() + ':' + date.getMinutes();
        return (
          <div
            style={{
              width: "100%",
              backgroundColor: 'white',
              fontFamily: "prompt",
              fontSize: "90%",
              borderRadius : "15px",
              marginBottom: "2%",
            }}
            className="container"
          >            
            <div style={{paddingTop:20}} >{this.props.msg}</div>
            <br />
            {newDate}
            {!this.props.isDelete ? <button onClick={this.deleteBtn} className="btn btn-danger" style={{
              padding: 4,
              marginLeft:"60%"
            }}>
                <i className="fas fa-trash-alt" /></button> : 'Deleted'}
            <br />
            <br />
          </div>
        );
    }
}
export default Memory;