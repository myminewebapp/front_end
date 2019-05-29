import { Component } from "react";
import React from 'react';

class Register extends Component{
    render(){
        return (
         <div>

            <div style={{marginTop: "2%", marginBottom: "2%", textAlign: "center"}}>
              <p style={{fontSize: "200%", fontFamily: "prompt", color: "#CAA58B"}}>
                สมัครสมาชิก
              </p>
            </div>
      
            <div style={{textAlign: "center", marginBottom: "2%"}}>
              <input
                style={{width: "400px",
                fontFamily: "prompt",
                fontSize: "100%"}}
                placeholder="ชื่อ"
              />
            </div>
      
            <div style={{textAlign: "center", marginBottom: "2%"}}>
              <input
                style={{width: "400px",
                fontFamily: "prompt",
                fontSize: "100%"}}
                placeholder="นามสกุล"
              />
            </div>
      
            <div style={{textAlign: "center", marginBottom: "2%"}}>
              <input
                style={{width: "400px",
                fontFamily: "prompt",
                fontSize: "100%"}}
                placeholder="อีเมล์"
              />
            </div>
      
            <div style={{textAlign: "center", marginBottom: "2%"}}>
              <input
                style={{width: "400px",
                fontFamily: "prompt",
                fontSize: "100%"}}
                placeholder="รหัสผ่าน"
              />
            </div>
      
            <div style={{textAlign: "center", marginBottom: "2%"}}>
              <input
                style={{width: "400px",
                fontFamily: "prompt",
                fontSize: "100%"}}
                placeholder="ยืนยันรหัสผ่าน"
              />
            </div>
      
            <div style={{textAlign: "center", marginBottom: "1.5%"}}>
              <button
                style={{width: "120px",
                fontFamily: "prompt",
                fontSize: "100%",
                backgroundColor: "#CAA58B",
                color: "white",
                borderRadius: "20px"}}
                type="submit"
              >
                สมัครสมาชิก
              </button>
              <a
                style={{width: "150px",
              fontFamily: "prompt",
              fontSize: "100%",
              backgroundColor: "#CAA58B",
              color: "white",
              borderRadius: "20px"}}
                type="submit"
                href="login.html"
              >
                ย้อนกลับ
              </a>
            </div>
          </div>
        );
    }
    
}
export default Register;