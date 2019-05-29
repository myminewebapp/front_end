import React ,{Component} from 'react';

class Header extends Component{
    render(){
        return (
          <nav style={{ backgroundColor: "#CAA58B", height: "60px" }}>
            <p
              style={{
                textAlign: "center",
                fontSize: "200%",
                color: "white",
                fontFamily: "prompt"
              }}
            >
              MyMine
            </p>
          </nav>
        );
    }
    
}
export default Header;