import React from 'react';
import './App.css';
import headerr from './Component/header';


function App() {
  return (
    <div>
      
      <header/>

      <div
        style={{ marginTop: "2%", marginBottom: "2%", textAlign: "left" }}
        class="container"
      >
        <div class="row">
          <div class="col-3">
            <div
              style={{
                width: "100%",
                height: "540px",
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "#707070",
                fontFamily: "prompt",
                fontSize: "90%"
              }}
            >
              <br />
              <p style={{ marginLeft: "10%" }}>
                <a href="home.html">หน้าแรก</a>
              </p>
              <p style={{ marginLeft: "10%" }}>
                <a href="searchMemory.html">กล่องความทรงจำ</a>
              </p>
              <p style={{ marginLeft: "10%" }}>
                <a href="searchMemory.html">ความทรงจำที่ถูกลบเลือน</a>
              </p>
              <hr />
              <p style={{ marginLeft: "10%" }}>
                <a href="profile.html">บัญชีผู้ใช้</a>
              </p>
              <p style={{ marginLeft: "10%" }}>ตั้งค่า</p>
            </div>
          </div>

          <div class="col-6">
            <div
              style={{width: "100%",
              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: "#707070",
              fontFamily: "prompt",
              fontSize: "90%",
              marginBottom: "3%"}}
              class="container"
            >
              <br />
              <textarea
                style={{marginBottom: "2%"}}
                class="form-control"
                rows="3"
              />
              <button style={{backgroundColor: "#CAA58B",color: "white"}}>
                เพิ่มรูปภาพ/วิดีโอ
              </button>
              <button style={{backgroundColor: "#CAA58B",color: "white",marginLeft: "63%"}}>
                บันทึก
              </button>
              <br />
              <br />
            </div>

            <div style={{overflow: "scroll",height: "50%"}}>
              <div
                style={{width: "100%",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "#707070",
            fontFamily: "prompt",
            fontSize: "90%",
            marginBottom: "2%"}}
                class="container"
              >
                ดกดกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกหหหหหหหหห
                กกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกก
                กกกกกกกกกกกกกกกกกกกกกก
                <br />
                ส. 01/12/2559
                <button style={{marginLeft: "70%"}}>ลบ</button>
                <br />
                <br />
              </div>

              <div
                style={{width: "100%",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "#707070",
            fontFamily: "prompt",
            fontSize: "90%",
            marginBottom: "2%"}}
                class="container"
              >
                ดกดกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกหหหหหหหหห
                กกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกก
                กกกกกกกกกกกกกกกกกกกกกก
                <br />
                ส. 01/12/2559
                <button style={{marginLeft: "70%"}}>ลบ</button>
                <br />
                <br />
              </div>

              <div
                style={{width: "100%",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "#707070",
            fontFamily: "prompt",
            fontSize: "90%",
            marginBottom: "2%"}}
                class="container"
              >
                ดกดกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกหหหหหหหหห
                กกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกก
                กกกกกกกกกกกกกกกกกกกกกก
                <br />
                ส. 01/12/2559
                <button style={{marginLeft: "70%"}}>ลบ</button>
                <br />
                <br />
              </div>

              <div
                style={{width: "100%",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "#707070",
            fontFamily: "prompt",
            fontSize: "90%",
            marginBottom: "2%"}}
                class="container"
              >
                ดกดกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกหหหหหหหหห
                กกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกก
                กกกกกกกกกกกกกกกกกกกกกก
                <br />
                ส. 01/12/2559
                <button style={{marginLeft: "70%"}}>ลบ</button>
                <br />
                <br />
              </div>
            </div>
          </div>

          <div class="col-3">
            <div
              style={{width: "100%",
                height: "300px",
                borderStyle:"solid",
                borderWidth: "1px",
                borderColor: "#707070",
                fontFamily: "prompt",
                fontSize: "90%"}}
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

export default App;