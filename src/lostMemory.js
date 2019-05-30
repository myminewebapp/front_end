import React, { Component } from "react";
import Memory from "./Component/memory";

class lostMemory extends Component {
    render() {
        return (
            <div>
                <p>ลบไม่ได้นะจ๊ะ</p>
                <div style={{ overflow: "scroll", height: "50%" }}>
                    <Memory />
                    <Memory />
                    <Memory />
                    <Memory />
                    <Memory />
                    <Memory />
                    <Memory />
                    <Memory />
                    <Memory />
                    <Memory />
                    <Memory />
                </div>
            </div>
        );
    }
}
export default lostMemory;
