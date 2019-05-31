import React, { Component } from "react";
import Memory from "./Component/memory";

class SearchMemory extends Component {
  constructor(props){
    super(props);
    this.state = {
      memoryArr: []
    }
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
                  memories.push(<Memory key={element._id} msg={element.message} date={element.date} isDelete={element.is_delete}/>);
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
      <div style={{ overflow: "scroll", height: "50%" }}>
        {this.state.memoryArr}
      </div>  
    );
  }
}
export default SearchMemory;
