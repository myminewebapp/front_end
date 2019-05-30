import React, { Component } from "react";

class Profile extends Component{
    render(){
        let user;
        if(this.props.account !== null){
            let account = this.props.account;
            user = account;
        }else{
            user = "please login!!"
        }
        return(
            <div className="text-justify" style={{ height: "50%", wordWrap: 'break-word'}}>
                {JSON.stringify(user)}
            </div>
        );
    }
}
export default Profile;