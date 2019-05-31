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
            emojiValue: 3,
            emojiClass: 'far fa-surprise fa-2x'
        };
    }

    mapEmojiValueToClassName = (value) => {
      const className = [
        'far fa-sad-cry fa-2x',
        'far fa-sad-tear fa-2x',
        'far fa-surprise fa-2x',
        'far fa-smile-beam fa-2x',
        'far fa-kiss-beam fa-2x'
      ];
      return className[value-1]
    }

    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
          [name]: value,
        });
    }

    handleEmojiValueChange = (event) => {
      const { value, name } = event.target;
      this.setState({
        [name]: value,
        'emojiClass': this.mapEmojiValueToClassName(value)
      });
  }
      
    onSubmit = (event) => {
        event.preventDefault();
        fetch('/mymine/api/memory', {
          method: 'POST',
          body: JSON.stringify({
            message_data : this.state.message,
            owner_account: this.props.account._id,
            emojiValue: this.state.emojiValue
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(res => {
          if (res.status === 200) {
              res.json().then(resMsg => {
              console.log(resMsg.res);
              this.setState({
                message: '',
                emojiValue: 3,
                emojiClass: 'far fa-surprise fa-2x'
              });
              this.props.reloadFunc();
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
              placeholder="พิมพ์ข้อความของคุณที่นี่"
              value={this.state.message}
              onChange={this.handleInputChange}
              required
            />
            <label>ความรู้สึก</label> 
            <i className={this.state.emojiClass} style={{marginLeft: "50%"}}/>
            <input type="range" className="custom-range" min="1" max="5"
              name="emojiValue"
              value={this.state.emojiValue}
              onChange={this.handleEmojiValueChange}
              required
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
