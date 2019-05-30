import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

class Register extends Component {
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
            <div style={{width: '100%'}}>
                <h1 style={{ margin: "20" }}><Route>
                    <Link to="/login" style={myst}
                    >ย้อนกลับ</Link>
                </Route></h1>

                <div style={{ marginTop: "2%", marginBottom: "2%", textAlign: "center" }}>
                    <p style={{ fontSize: "200%", fontFamily: "prompt", color: "#CAA58B" }}>
                        สมัครสมาชิก
              </p>
                </div>

                <div style={{ textAlign: "center", marginBottom: "2%" }}>
                    <input
                        style={{
                            width: "400px",
                            fontFamily: "prompt",
                            fontSize: "100%"
                        }}
                        placeholder="ชื่อ"
                    />
                </div>

                <div style={{ textAlign: "center", marginBottom: "2%" }}>
                    <input
                        style={{
                            width: "400px",
                            fontFamily: "prompt",
                            fontSize: "100%"
                        }}
                        placeholder="นามสกุล"
                    />
                </div>

                <div style={{ textAlign: "center", marginBottom: "2%" }}>
                    <input
                        style={{
                            width: "400px",
                            fontFamily: "prompt",
                            fontSize: "100%"
                        }}
                        placeholder="อีเมล์"
                    />
                </div>

                <div style={{ textAlign: "center", marginBottom: "2%" }}>
                    <input
                        style={{
                            width: "400px",
                            fontFamily: "prompt",
                            fontSize: "100%"
                        }}
                        placeholder="รหัสผ่าน"
                    />
                </div>

                <div style={{ textAlign: "center", marginBottom: "2%" }}>
                    <input
                        style={{
                            width: "400px",
                            fontFamily: "prompt",
                            fontSize: "100%"
                        }}
                        placeholder="ยืนยันรหัสผ่าน"
                    />
                </div>

                <div style={{ textAlign: "center", marginBottom: "1.5%" }}>
                    <Route>
                        <Link to="/" style={myst}
                        >สมัครสมาชิก</Link>
                    </Route>

                </div>
            </div>
        );
    }

}
export default Register;