import React, { useState } from "react";
import './login.css'
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import carm from '../images/carm.png';

import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login=()=>{
    navigate('/register')
  }

  const proceedLogin=(e)=> {
    e.preventDefault();
    if(validate()){
    //  console.log('proceed');
    fetch("http://localhost:8000/register/"+username).then((res)=>{
      return res.json();
    }).then((resp)=>{
      // console.log(resp)
      if(Object.keys(resp).length=== 0){
        toast.error('Please Enter valid username');
      }else{
        if (resp.password===password){
          toast.success('success');
          localStorage.setItem("username", username); // Store username
        navigate('/')
        window.location.reload()

        }else{
          toast.error('Please Enter valid credentials');
        }
      }
    }).catch((err)=>{
      toast.error('Login failed due to incorrect details')

    });

    }
  }
  const validate=()=>{
    let result=true;
    if(username==="" || username===null){
      result=false;
      toast.warning('Please Enter username')
    }
  
   
    if(password==="" || password===null){
      result=false;
      toast.warning('Please Enter Password')
    }
  
  return result;
  }


 

  return (
    <div className="backgroundlog">
      <div className="container mt-3">
        <div className="row justify-content-center">
          <div className="col-md-6  col-lg-4 col-sm-8"  id="borde">
            <form onSubmit={proceedLogin}>
              <h1 id="curve" style={{ fontFamily: "fantasy", color: "white" }}>LOGIN</h1>
              <div className="form-group">
                <label htmlFor="username" id="labellog" className="form-label">Username</label>
                <div className="input-group">
                  <span className="input-group-text"><FaUser /></span>
                  <input
                    type="text"
                    className="form-control"
                    id="logform"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="password" id="labellog" className="form-label">Password</label>
                <div className="input-group">
                  <span className="input-group-text"><FaLock /></span>
                  <input
                    type="password"
                    className="form-control"
                    id="logform"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>


              <div className="text-center mt-5">
                <button type="submit" className="logbtn" style={{ width: "150px" }}>Login</button>
              </div>

              <div className="text-center mt-3">
                <p style={{ textAlign: "center", fontSize: "18px", fontFamily: "serif", color: "white" }}>
                  Don't have an account yet? Sign Up
                </p>
                <button type="button" className="logbtn" onClick={login} style={{ width: "150px" }}>Signup</button>
              </div>
            </form>
          </div>
          <div className="col-lg-6">
            <img src={carm} alt="car" className="car-animation" />
          </div>
        </div>
      </div>

      <div className="footer">
      <div class="container-fluid ">
          <div class="row">

            <div class="col-lg-12">
              <h2 style={{ color: 'white', fontSize: '35px' }}>JOIN OUR COMMUNITY</h2>
              <h2 style={{ color: 'white' }}><FaFacebook />|<IoLogoWhatsapp />|<FaSquareInstagram />|<FaTelegram /></h2>

            </div>

          </div>






          <div class="row">

            <div className="col-lg-3  col-md-4 col-sm-3  mt-4 ">

              <h3 style={{ color: "white", fontSize: "40px" }}>TAXIWALA</h3>

            </div>
            <div className="col-lg-3 col-md-4 col-sm-3   mt-4">
              <h2 style={{ color: "white" }}>Contact us</h2>
              <h3 style={{ color: "white", fontSize: "18px", fontFamily: "serif" }}>Phone:8714189106</h3>
              <h3 style={{ color: "white", fontSize: "18px", fontFamily: "serif", lineHeight: "1px" }}>Phone:8129193098</h3>
              <h3 style={{ color: "white", fontSize: "18px", fontFamily: "serif" }}>Phone:9495046499</h3>

            </div>
            <div className="col-lg-3 col-md-4  col-sm-3 mt-4">
              <h2 style={{ color: "white", textAlign: "center" }}>Our Address</h2>
              <h3 style={{ color: "white", fontSize: "18px", textAlign: "left", fontFamily: "serif" }}>Eagle Fleet Services (P) Ltd,ASV Bethel Square, 12/28, Sivaganga Main Rd, Nungambakkam
              </h3>
              <h3 style={{ color: "white", fontSize: "18px", textAlign: "left", fontFamily: "serif", lineHeight: "5px" }}>Chennai-6800005</h3>

            </div>


            <div className="col-lg-3 col-md-4  col-sm-3 mt-4">

              <h2 style={{ color: "white", textAlign: "center" }} className="footer-section-title">Quick Links</h2>
              <h3 style={{ color: "white",textAlign:"center", fontSize: "18px", fontFamily: "serif" }}>Home</h3>
              <h3  style={{ color: "white",textAlign:"center", fontSize: "18px", fontFamily: "serif" }}>contact</h3>
              <h3  style={{ color: "white",textAlign:"center", fontSize: "18px", fontFamily: "serif" }}>login</h3>
              <h3  style={{ color: "white",textAlign:"center", fontSize: "18px", fontFamily: "serif" }}>booking</h3>
           



              </div>


            <hr style={{ color: "white" }}></hr>
            <div class="row mt-3">
              <div className="foot">
                <div className="col-md-12 text-center">
                  <h3 style={{ color: "white", fontSize: "18px" }}> &copy; 2024 Your Company. All Rights Reserved. | <a href="#privacy-policy">Privacy Policy</a> | <a href="#terms-of-service">Terms of Service</a></h3>
                </div>




              </div>
            </div>














          </div>
        </div>
      </div>

    </div>
  );
}

export default Login;
