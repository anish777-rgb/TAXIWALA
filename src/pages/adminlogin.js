import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './adminlogin.css';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



function Admin() {

   const[username,setUsername]=useState("");
   const[password,setPassword]=useState(""); 
   const navigate= useNavigate('')


   const adminlogin=(e)=> {
    e.preventDefault();
    if(validate()){
    //  console.log('proceed');
    fetch("http://localhost:8000/admin/"+username).then((res)=>{
      return res.json();
    }).then((resp)=>{
      // console.log(resp)
      if(Object.keys(resp).length=== 0){
        toast.error('Please Enter valid username');
      }else{
     
        if (resp.password===password){
          toast.success('Successfully Login');
          localStorage.setItem("username", username); // Store username
        navigate('/adminpage')

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
      toast.warning('Please Enter Username')
    }
  
   
    if(password==="" || password===null){
      result=false;
      toast.warning('Please Enter Password')
    }
  
  return result;
  }

   

    return (
        <div className="adminback">
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-4 p-4 shadow rounded" id="admincont">
                        <form onSubmit={adminlogin}>
                            <div className="headingadmin text-center mb-4">
                                <h1 className="text-white" style={{ fontFamily: "fantasy" }}>Admin Login</h1>
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="email" className="form-label text-white" style={{ display: "grid", textAlign: "left",color:"white" }}>Username</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    id="adminput"
                                    name="username"
                                    placeholder="Enter your Username"
                                    value={username}
                                    onChange={(e)=>setUsername(e.target.value)}
                                    
                                />
                            </div>
                            
                            <div className="form-group mb-3">
                                <label htmlFor="password" className="form-label text-white" style={{ display: "grid", textAlign: "left" }}>Password</label>
                                <input
                                    type="password"
                                    className='form-control'
                                      id="adminput"
                                    name="password"
                                    placeholder="Enter your Password"
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                   
                                />
                            </div>
                            
                            <div className="row justify-content-center mt-5">
                                <button type="submit" className="btn btn-primary logbtn" style={{ width: "150px" }}>Login</button>

                                
                            </div>
                          
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;
