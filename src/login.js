import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
          [name]: value
        });
    }
      
    onSubmit = (event) => {
        event.preventDefault();
        fetch('/mymine/api/auth', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                  'Content-Type': 'application/json'
                }
        })
        .then(res => {
            if (res.status === 200) {
                // this.props.history.push('/');
                window.location = "/";
            } else if(res.status === 401){
                res.json().then(resMsg => {
                    alert(resMsg.res);
                });
            } else if(res.status === 500 ){
                res.json().then(resMsg => {
                    alert(resMsg.res);
                });
            } else {
                const error = new Error(res.error);
                throw error;
            }
        })
        .catch(err => {
            console.error(err);
            //alert('Error logging in please try again');
        });
    }

    render() {
        var myst = {
            width: 150,
            fontFamily: 'prompt',
            fontSize: 18,
            backgroundColor: '#CAA58B',
            color: 'white',
            borderRadius: 40,
            border: 2,
            padding: 7,
            margin: 5,
            marginBottom: 5
        };

        return (
            <div style={{width: '100%'}}>
                <div style={{ marginTop: "2%", marginBottom: "2%", textAlign: "center" }}>
                    <p style={{ fontSize: "200%", fontFamily: "prompt", color: "#CAA58B" }}>
                        ลงชื่อเข้าใช้
                    </p>
                </div>
                <form onSubmit={this.onSubmit}>
                    <div style={{ marginTop: "3%", marginBottom: "2%", textAlign: "center" }}>
                        <input style={{
                                width: "400px",
                                fontFamily: "prompt",
                                fontSize: "100%",
                                margin: 'auto'}} 
                            type="email" 
                            placeholder="อีเมล์" 
                            className="form-control"
                            value={this.state.email}
                            name="email"
                            onChange={this.handleInputChange}
                            required
                            />
                    </div>
                    <div style={{ textAlign: "center", marginBottom: "3%" }}>
                        <input style={{
                                width: "400px",
                                fontFamily: "prompt",
                                fontsize: "100%",
                                margin: 'auto'}} 
                            type="password" 
                            placeholder="รหัสผ่าน" 
                            className="form-control"
                            value={this.state.password}
                            name="password"
                            onChange={this.handleInputChange}
                            required
                            />
                    </div>
                    <div style={{ textAlign: "center", margin: 20 }}>
                        <button style={myst} type="submit">ลงชื่อเข้าใช้</button>
                    </div>
                </form>
                <div style={{ textAlign: "center" }}>
                    <Route style={{ textAlign: "center" }}>
                        <Link to="/registers" style={{ textAlign: "center", color: "#0066FF", fontFamily: "prompt" }}>สมัครสมาชิก</Link>
                    </Route>
                </div>
            </div>
        );
    }

}
export default Login;