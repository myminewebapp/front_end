import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './Component/header';

class Login extends Component {
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
        }



        return (
            <div>
                <Header/>
                <div style={{ marginTop: "2%", marginBottom: "2%", textAlign: "center" }}>
                    <p style={{ fontSize: "200%", fontFamily: "prompt", color: "#CAA58B" }}>
                        ลงชื่อเข้าใช้
              </p>
                </div>

                <div style={{ marginTop: "3%", marginBottom: "2%", textAlign: "center" }}>
                    <input style={{
                        width: "400px",
                        fontFamily: "prompt",
                        fontSize: "100%"
                    }}
                        type="email" aria-describedby="emailHelp" placeholder="อีเมล์" />
                </div>

                <div style={{ textAlign: "center", marginBottom: "3%" }}>
                    <input style={{
                        width: "400px",
                        fontFamily: "prompt",
                        fontsize: "100%"
                    }} type="password" placeholder="รหัสผ่าน" />
                </div>



                <div style={{ textAlign: "center", margin: 20 }}>
                    <Route>
                        <Link to="#" style={myst}>ลงชื่อเข้าใช้</Link>
                    </Route></div>

                <div style={{ textAlign: "center" }}>
                    <Route style={{ textAlign: "center" }}>
                        <Link to="/registers" style={{ textAlign: "center", color: "#0066FF", fontFamily: "prompt" }}>สมัครสมาชิก</Link>
                    </Route></div>


            </div>
        );
    }

}
export default Login;