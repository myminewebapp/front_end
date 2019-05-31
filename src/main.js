import React from 'react';
import { Component } from "react";
import Postbox from './Component/postbox';
import Memory from './Component/memory';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            account: null,
            timelineArr: []
        }
    }

    getDate = () =>{
        if(this.props.account !== null){
            this.setState({account : this.props.account});
            fetch('mymine/api/timeline/'+ this.props.account._id)
            .then(res => {
              if (res.status === 200) {
                res.json().then(result => {
                    // console.log(result);
                    let timelines = [];
                    result.forEach(element => {
                        timelines.push(<Memory key={element._id} id={element._id} msg={element.message} date={element.date} isDelete={element.is_delete} emojiValue={element.emojiValue} reloadFunc={this.getDate}/>);
                    });
                    this.setState({
                        timelineArr: timelines
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

    render(){
        return(
            <div>
                <Postbox account={this.state.account} reloadFunc={this.getDate} />
                <div style={{ overflow: "scroll", height: "10%" }}>
                    {this.state.timelineArr}
                </div>
            </div>
        );
    }
}
export default Main;