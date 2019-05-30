import React, { Component } from "react";
// import { makeStyles } from '@material-ui/core/styles';
// import Fab from '@material-ui/core/Fab';
// import AddIcon from '@material-ui/icons/Add';
// import Icon from '@material-ui/core/Icon';
// import DeleteIcon from '@material-ui/icons/Delete';
// import NavigationIcon from '@material-ui/icons/Navigation';


class Postbox extends Component {
   constructor(props){
        super(props);
        this.state = {
            message: '',
        };
    }

    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
          [name]: value
        });
    }
      
    onSubmit = (event) => {
        event.preventDefault();
        fetch('/mymine/api/memory', {
          method: 'POST',
          body: JSON.stringify({
            message_data : this.state.message,
            owner_account: this.props.account._id
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(res => {
          if (res.status === 200) {
            // this.props.history.push('/');
            res.json().then(resMsg => {
              // alert(resMsg.res);
              // window.location = '/';
              console.log(resMsg.res);
              this.setState({
                message: ''
              });
            });
          } else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch(err => {
          console.error(err);
        //   alert('Error logging in please try again');
        });
    }

    render() {
      return (
        <div
          style={{
            width: "100%",
            backgroundColor: 'white',
            fontFamily: "prompt",
            fontSize: "90%",
            borderRadius : "15px",
            marginBottom: "3%"
          }}
          className="container"
        >
          <br />
          <form onSubmit={this.onSubmit}>
            <textarea
              style={{ marginBottom: "2%" }}
              className="form-control"
              rows="3"
              name="message"
              value={this.state.message}
              onChange={this.handleInputChange}
            />
            <button style={{ backgroundColor: "#CAA58B", color: "white" }} type="button" className="btn btn-secondary">
              เพิ่มรูปภาพ/วิดีโอ</button>    
            <button style={{
                backgroundColor: "#CAA58B",
                color: "white",
                marginLeft: "59%"
              }} type="submit" className="btn btn-secondary">บันทึก</button>
          </form>
          <br />
          <br />
        </div>
      );
    }
}
export default Postbox;
