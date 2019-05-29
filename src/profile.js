import React, { Component } from "react";
import Header from './Component/header';
import Menu from './Component/menu';



class profile extends Component{
    render(){
        return(
            <div>

                <Header />
                <div
                    style={{ marginTop: "2%", marginBottom: "2%", textAlign: "left" }}
                    class="container"
                >
                    <div class="row">
                        <Menu />

                        <div class="col-6">


                            <div style={{ height: "50%" }}>
                                
                            </div>
                        </div>

                        <div class="col-3">
                            <div
                                style={{
                                    width: "100%",
                                    height: "300px",
                                    borderStyle: "solid",
                                    borderWidth: "1px",
                                    borderColor: "#707070",
                                    fontFamily: "prompt",
                                    fontSize: "90%"
                                }}
                                class="container"
                            >
                                date
            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default profile;