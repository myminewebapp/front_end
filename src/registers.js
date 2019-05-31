import React, { Component } from "react";
import { Route, Link} from "react-router-dom";

const CODE = require('./config/mymine.res.code');

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confPassword: '',
        };
        this.emailInput = React.createRef();
    }

    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
          [name]: value
        });
    }
      
    onSubmit = (event) => {
        event.preventDefault();
        if(this.state.password !== this.state.confPassword){
            alert('password do not match');
        }else{
            fetch('/mymine/api/register', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                  'Content-Type': 'application/json'
                }
              })
              .then(res => {
                if (res.status === 200) {
                  // this.props.history.push('/');
                  res.json().then(resMsg => {
                    alert(resMsg.res);
                    if(resMsg.code === CODE.error.emailDup){
                        this.emailInput.current.focus();
                        this.emailInput.current.style.borderColor = 'RED';
                    }else if(resMsg.code === CODE.normal.regisComplete){
                        window.location = '/login';
                    }
                  });
                } else {
                  const error = new Error(res.error);
                  throw error;
                }
              })
              .catch(err => {
                console.error(err);
              //   alert('Error logging in please try again');
              });
        }
        // console.log(this.state);
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
                <form onSubmit={this.onSubmit}>
                    <div style={{marginBottom: "2%" }}>
                        <input
                            className="form-control"
                            type="text"
                            style={{
                                width: "400px",
                                fontFamily: "prompt",
                                fontSize: "100%",
                                margin: 'auto'
                            }}
                            placeholder="ชื่อ"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <div style={{marginBottom: "2%" }}>
                        <input
                            className="form-control"
                            type="text"
                            style={{
                                width: "400px",
                                fontFamily: "prompt",
                                fontSize: "100%",
                                margin: 'auto'
                            }}
                            placeholder="นามสกุล"
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <div style={{marginBottom: "2%" }}>
                        <input
                            className="form-control"
                            type="email"
                            style={{
                                width: "400px",
                                fontFamily: "prompt",
                                fontSize: "100%",
                                margin: 'auto'
                            }}
                            placeholder="อีเมล์"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            ref={this.emailInput}
                            required
                        />
                    </div>
                    <div style={{marginBottom: "2%" }}>
                        <input
                            className="form-control"
                            type="password"
                            style={{
                                width: "400px",
                                fontFamily: "prompt",
                                fontSize: "100%",
                                margin: 'auto'
                            }}
                            placeholder="รหัสผ่าน"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <div style={{marginBottom: "2%" }}>
                        <input
                            className="form-control"
                            type="password"
                            style={{
                                width: "400px",
                                fontFamily: "prompt",
                                fontSize: "100%",
                                margin: 'auto'
                            }}
                            placeholder="ยืนยันรหัสผ่าน"
                            name="confPassword"
                            value={this.state.confPassword}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <div style={{textAlign: 'center' ,marginBottom: "1.5%" }}>
                        <button style={myst} type="submit">สมัครสมาชิก</button>
                    </div>
                </form>
            </div>
        );
    }

}
export default Register;