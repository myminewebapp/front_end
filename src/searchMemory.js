import React, { Component } from "react";
import Memory from "./Component/memory";

class SearchMemory extends Component {
  constructor(props){
    super(props);
    this.state = {
        memoryArr: [],
        memorySearch: '',
    }
  }
  getDate = () =>{
    if(this.props.account !== null){
      fetch('mymine/api/memory/'+this.props.account._id)
        .then(res => {
          if (res.status === 200) {
            res.json().then(result => {
              // console.log(result);
              this.setState({
                memoryArr: result
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
  }

  componentDidMount(){
   this.getDate();
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    let memories = [];
    this.state.memoryArr.forEach(element => {
        if(this.state.memorySearch !== ''){
             if(element.message.toLowerCase().includes(this.state.memorySearch.toLowerCase())){
                memories.push(<Memory key={element._id} id={element._id} msg={element.message} date={element.date} isDelete={element.is_delete} emojiValue={element.emojiValue} reloadFunc={this.getDate} />);
             }
        }else{
             memories.push(<Memory key={element._id} id={element._id} msg={element.message} date={element.date} isDelete={element.is_delete} emojiValue={element.emojiValue} reloadFunc={this.getDate} />);
        }
    });
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
                value={this.state.memorySearch}
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
          {memories}
        </div>  
      </div>
    );
  }
}
export default SearchMemory;
