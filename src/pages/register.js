import React, { useState } from "react";
import './register.css';

import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    const [id, setId] = useState("")
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const reg = () => {
        navigate("/login");

    };
    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the value in ';
        if (id === null || id === '') {
            isproceed = false;
            errormessage += ' Username,';
        }
        if (name === null || name === '') {
            isproceed = false;
            errormessage += ' Fullname,';
        }
        if (email === null || email === '') {
            isproceed = false;
            errormessage += ' Email,';
        }
        if (password === null || password === '') {
            isproceed = false;
            errormessage += ' Password,';
        }

        if (confirmPassword === null || confirmPassword === '') {
            isproceed = false;
            errormessage += ' Confirmpassword';
        }

        if (!isproceed) {
            toast.warning(errormessage)
        } else {
            if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {

            } else {
                isproceed = false;
                toast.warning('Please enter the valid email')
            }
            if (password.length >= 6) {
                // Password is valid
            } else {
                isproceed = false;
                toast.warning('Password must be at least 6 characters long');
            }
            if (password === confirmPassword) {
                // Passwords match
            } else {
                isproceed = false;
                toast.warning('Passwords do not match');
            }
        }
        return isproceed;
    }




    const handleSubmit = (e) => {
        e.preventDefault();
        let regobj = { id, name, email, password, confirmPassword };
        if (IsValidate()) {
            console.log(regobj);

            fetch("http://localhost:8000/register", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(regobj)
            }).then((res) => {
                toast.success('Registered successfully.')
                navigate("/login")

            }).catch((err) => {
                toast.error('Failed :' + err.message);
            });
        }
    }




    return (
        <div className="background">
            <div className="container mt-3">
                <div className="row justify-content-center">
                    <div className="col-md-5" id="bo">
                        <form onSubmit={handleSubmit}>
                            <h1 style={{ fontFamily: "fantasy", color: "white" }}>SIGN UP</h1>
                            <div className="reg">
                                <div className="form-group" id="formsign">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        placeholder="Enter username"
                                        value={id}
                                        onChange={(e) => setId(e.target.value)}
                                    />

                                </div>
                                <div className="form-group" id="formsign">
                                    <label htmlFor="Fullname" className="form-label">Full name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="fullname"
                                        placeholder="Enter fullname"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                <div className="form-group" id="formsign">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="emails"
                                        placeholder="Enter email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="form-group" id="formsign">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Enter password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <div className="form-group" id="formsign">
                                    <label htmlFor="confirm-password" className="form-label">Repeat Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="confirm-password"
                                        placeholder="Enter password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>

                                <div className="row justify-content-center mt-5">
                                    <button type="submit" className="logbtn" style={{ width: "150px" }}>SIGN UP</button>
                                </div>

                                <div className="row justify-content-center mt-3">
                                    <p style={{ textAlign: "center", fontSize: "18px", fontFamily: "serif", paddingTop: "50px" }}>
                                        If you already have an account, just login
                                    </p>
                                    <button type="button" className="logbtn" onClick={reg} style={{ width: "150px" }}>Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-5" id="pic"></div>
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

export default Register;
