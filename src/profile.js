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
            <div className="text-justify" 
            style={{ 
                height: "50%",
                wordWrap: 'break-word',
                width: "100%",
                backgroundColor: 'white',
                fontFamily: "prompt",
                fontSize: "90%",
                borderRadius : "15px",
                marginBottom: "3%"}}>
                {/* {JSON.stringify(user)} */}
                <div style={{margin:40,padding:15}}>Firstname  :  {user.firstName}</div>
                <div style={{margin:40,padding:15}}>Lastname  :  {user.lastName}</div>
                <div style={{margin:40,padding:15}}>Email  :  {user.email}</div>
                
                
            </div>
        );
    }
}
export default Profile;