import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <nav style={{ backgroundColor: "#CAA58B", height: "60px" }}>
                    <p style={{
                        textAlign: "center",
                        fontSize: "200%",
                        color: "white",
                        fontFamily: "prompt"
                    }}>
                        MyMine
        </p>
                </nav>
                <div style={{ marginTop: "10%", marginBottom: "2%", textAlign: "center" }}>
                    <input style={{
                        width: "400px",
                        fontFamily: "prompt",
                        fontSize: "100%"
                    }}
                        type="email" aria-describedby="emailHelp" placeholder="อีเมล์" />
                </div>

                <div style={{ textAlign: "center", marginBottom: "2%" }}>
                    <input style={{
                        width: "400px",
                        fontFamily: "prompt",
                        fontsize: "100%"
                    }} type="password" placeholder="รหัสผ่าน" />
                </div>

                <div style={{ textAlign: "center", marginBottom: "1.5%" }}>
                    <a style={{
                        width: "95px",
                        fontFamily: "prompt",
                        fontSize: "100%",
                        backgroundColor: "#CAA58B",
                        color: "white",
                        borderRadius: "20px"
                    }} href="home.html">
                        ลงชื่อเข้าใช้
        </a>
                </div>

                <div style={{ textAlign: "center" }}>
                    <a href="register.html" style={{ color: "#0066FF", fontFamily: "prompt" }}>
                        สมัครสมาชิก
        </a>
                </div>
            </div>



        );
    }

}
export default Login;