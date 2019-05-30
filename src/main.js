import React from 'react';
import { Component } from "react";
import Postbox from './Component/postbox';
import Memory from './Component/memory';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            timelineArr: []
        }
    }
    render(){
        let account = null;
        if(this.props.account !== null){
            account = this.props.account;
            fetch('mymine/api/timeline/'+account._id)
            .then(res => {
              if (res.status === 200) {
                res.json().then(result => {
                    // console.log(result);
                    let timelines = [];
                    result.forEach(element => {
                        timelines.push(<Memory key={element._id} msg={element.message} date={element.date} />);
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
        return(
            <div>
                <Postbox account={account} />
                <div style={{ overflow: "scroll", height: "10%" }}>
                    {this.state.timelineArr}
                </div>
            </div>
        );
    }
}
export default Main;