import React, { Component } from "react";
class Header extends Component{
    render(){
        // let user;
        // if(this.props.account !== null){
        //   let account = this.props.account;
        //   // console.log(account);
        //   user = account.firstName + ' ' + account.lastName;
        // }else{
        //   user = "please login!!"
        // }
        return (
          <nav className="myHeader" style={{ 
            backgroundColor: "#CAA58B", 
            height: "60px" }}>
            <p
              style={{
                textAlign: "center",
                fontSize: "200%",
                color: "white",
                fontFamily: "prompt"
              }}
            >
              MyMine 
              {/* Welcome {user} */}
            </p>
          </nav>
        );
    }
}
export default Header;