import React from 'react';
import { Component } from "react";
import Postbox from './Component/postbox';
import Memory from './Component/memory';


class main extends Component{
    render(){
        return(
            <div>
                <Postbox />
                <div style={{ overflow: "scroll", height: "50%" }}>
                    <Memory />
                    <Memory />
                    <Memory />
                </div>
            </div>
        );
    }
}
export default main;