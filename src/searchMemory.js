import React, { Component } from "react";
import Memory from "./Component/memory";

class SearchMemory extends Component {
  constructor(props){
    super(props);
    this.state = {
      memoryArr: [],
      memorySearch: ''
    }
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    let account = null;
    if(this.props.account !== null){
      account = this.props.account;
      fetch('mymine/api/memory/'+account._id)
        .then(res => {
          if (res.status === 200) {
            res.json().then(result => {
              // console.log(result);
              let memories = [];
              result.forEach(element => {
                  if(this.state.memorySearch !== ''){
                    if(element.message.includes(this.state.memorySearch)){
                      memories.push(<Memory key={element._id} msg={element.message} date={element.date} isDelete={element.is_delete} emojiValue={3}/>);
                    }
                  }else{
                    memories.push(<Memory key={element._id} msg={element.message} date={element.date} isDelete={element.is_delete} emojiValue={element.emojiValue}/>);
                  }
              });
              this.setState({
                memoryArr: memories
              });
            });
          } else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch(err => {
          console.error(err);
        });
    }
    return (
      <div>
        <input
                style={{
                  width: "100%",
                  fontFamily:"prompt",
                  fontSize: "100%"
                }}
                type= "text"
                placeholder="ค้นหาความทรงจำ"
                className="form-control"
                value={this.state.email}
                name="memorySearch"
                onChange={this.handleInputChange}
          />
      <div style={{ overflow: "scroll", height: "50%" }}>
        <div style={{
          width: "100 %",
          fontFamily: "prompt",
          fontSize: "90%",
          marginBottom: "3%"  
        }}>
          </div>
          {this.state.memoryArr}
        </div>  
      </div>
    );
  }
}
export default SearchMemory;
