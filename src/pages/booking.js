import React, { useState } from "react";
import './booking.css'
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6"
import { FaTelegram } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";



function Booking(){
  const location=useLocation();
  const[values,setValues]=useState({name:'',email:'',mobilenumber:"",pickupcity:"",pickupdate:"",pickuptime:"",dropoffdate:"",dropoffplace:"",comments:"" ,cartype:location.state?.cartype||""})
  const navigate=useNavigate();
  const[errors,setErrors]=useState({});
  const handleSubmit=((event)=>{event.preventDefault();
  const validationErrors=validate();
  setErrors(validationErrors);
  if(Object.keys(validationErrors).length=== 0)
  axios.post('http://localhost:8000/users',values)
.then(response=>{
  console.log(response);
   alert('Booking confirmed!');
  navigate('/cars')
})
.catch(err=>console.log(err))
  })

  const validate=()=>{
    let errors={};

    if (!values.name){
      errors.name="*Name is required";
    }

    if (!values.email){
      errors.email="*Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)){
      errors.email="Email is invalid"
    }
    if (!values.mobilenumber) {
      errors.mobilenumber = "*Mobile number is required";
    } else if (!/^\d{10}$/.test(values.mobilenumber)) {
      errors.mobilenumber = "Mobile number is invalid";
    }
    if (!values.pickupcity){
      errors.pickupcity="*Enter pickupcity";
    }

    if(!values.pickupdate){
      errors.pickupdate="*Enter pickup date";
    }

    if(!values.pickuptime){
      errors.pickuptime="*Enter pickup time";
    }
    if (!values.dropoffdate){
      errors.dropoffdate="*Enter drop of time";
    }
    
    if (!values.cartype){
      errors.cartype="*Select car type"
    }

    if(!values.dropoffplace){
      errors.dropoffplace="*Enter drop of place"
    }
    return errors
  };




  


 


 

    return(

      
      <div class ="backgroundbooking">
      
      
      <div class="booking-intro ">
        "Welcome to our booking platform! Ready to embark on your journey? Simply fill out the form below to secure your spot. Our seamless booking process ensures a hassle-free experience, allowing you to focus on the excitement ahead. Let's get started!"
      </div>
      <div class="bord">
      <form onSubmit={handleSubmit}>
      <div class="container"  id="table">
      <div class="row">
       
         <div class="col-md-6">
      
             <label for="name" class="let">Name</label>
             <input type="text" class="form-control" id="name"  style={{color:"black",borderColor:"GrayText"}}placeholder="Enter your name" onChange={e=>setValues({...values,name:e.target.value})}/>
             {errors.name && <p style={{color:"red",fontSize:"18px",fontFamily:"italic",textShadow:"2px 2px 5px white"}} className="error">{errors.name}</p>}
         </div>
         <div class="col-md-6">
             <label for="email"class="let">Email</label>
             <input type="email" class="form-control" id="email" style={{color:"black",borderColor:"GrayText"}} placeholder="Enter your email" onChange={e=>setValues({...values,email:e.target.value})}/>
             {errors.email && <p  style={{color:"red",fontSize:"18px",fontFamily:"italic",textShadow:"2px 2px 5px white"}}className="error">{errors.email}</p>}
         </div>
      </div>
      <div class="row">
       
         <div class="col-md-6">
             <label for="number" class="let">Mobile Number</label>
             <input type="text" class="form-control" id="number"style={{color:"black",borderColor:"GrayText"}} placeholder="Enter your number" onChange={e=>setValues({...values,mobilenumber:e.target.value})}/>
             {errors.mobilenumber && <p style={{color:"red",fontSize:"18px",fontFamily:"italic",textShadow:"2px 2px 5px white"}} className="error">{errors.mobilenumber}</p>}

         </div>
         <div class="col-md-6">
             <label for="pickupcity" class="let">Pickup city</label>
             <input type="text" class="form-control" id="pickupcity" style={{color:"black",borderColor:"GrayText"}}placeholder="Enter your pickup place" onChange={e=>setValues({...values,pickupcity:e.target.value})}/>
             {errors.pickupcity && <p style={{color:"red",fontSize:"18px",fontFamily:"italic",textShadow:"2px 2px 5px white"}}className="error">{errors.pickupcity}</p>}

         </div>
      </div>
      <div class="row">
         
         <div class="col-md-6">
             <label for="pickupdate" class="let">Pickup date</label>
             <input type="date" class="form-control" id="pickupdate"style={{color:"black",borderColor:"GrayText"}} onChange={e=>setValues({...values,pickupdate:e.target.value})}/>
             {errors.pickupdate && <p  style={{color:"red",fontSize:"18px",fontFamily:"italic",textShadow:"2px 2px 5px white"}}className="error">{errors.pickupdate}</p>}

         </div>
         <div class="col-md-6">
             <label for="pickuptime" class="let">Pickup time</label>
             <input type="time" class="form-control" id="pickuptime" style={{color:"black",borderColor:"GrayText"}} onChange={e=>setValues({...values,pickuptime:e.target.value})}/>
             {errors.pickuptime && <p style={{color:"red",fontSize:"18px",fontFamily:"italic",textShadow:"2px 2px 5px white"}} className="error">{errors.pickuptime}</p>}

         </div>
      </div>
      <div class="row">
      
         <div class="col-md-6">
             <label for="dropdate" class="let">Drop off date</label>
             <input type="date" class="form-control" id="dropdate" style={{color:"black",borderColor:"GrayText"}}onChange={e=>setValues({...values,dropoffdate:e.target.value})}/>
             {errors.dropoffdate && <p style={{color:"red",fontSize:"18px",fontFamily:"italic",textShadow:"2px 2px 5px white"}} className="error">{errors.dropoffdate}</p>}

         </div>
         <div class="col-md-6">
             <label for="dropoffplace" class="let">Drop off place</label>
             
             <input type="text" class="form-control" id="dropofftime" style={{color:"black",borderColor:"GrayText"}}placeholder="Enter your drop place"onChange={e=>setValues({...values,dropoffplace:e.target.value})}/>
             {errors.dropoffplace && <p style={{color:"red",fontSize:"18px",fontFamily:"italic",textShadow:"2px 2px 5px white"}} className="error">{errors.dropoffplace}</p>}

         </div>
      </div>
      <div class="row">
      <div class="col-md-6">
             <label for="car type" class="let">Car Type</label>
             <input
             type="text" class="form-control" id="cartype" style={{color:"black",borderColor:"GrayText"}} readOnly value={values.cartype} onChange={e=>setValues({...values,cartype:e.target.value})}/>

            
              {errors.cartype && <p style={{color:"red",fontSize:"18px",fontFamily:"italic",textShadow:"2px 2px 5px white"}} className="error">{errors.cartype}</p>}

         </div>
        </div>
      <div class="row">
      <div class="col-md-12">
             <label for="comments" class="let">Comments</label>
             <input type="text" class="form-control" id="comments" style={{color:"black",borderColor:"GrayText"}} onChange={e=>setValues({...values,comments:e.target.value})}/>
         </div>
        </div>
     
            <div class="button ">
              
        <button type="submit" class="btn btn-danger">BOOK NOW</button>



        </div>
        
        
      </div>
      </form>
      
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

            <div className="col-lg-3 mt-4 ">

              <h3 style={{ color: "white", fontSize: "40px" }}>TAXIWALA</h3>

            </div>
            <div className="col-lg-3  col-md-12 mt-4">
              <h2 style={{ color: "white" }}>Contact us</h2>
              <h3 style={{ color: "white", fontSize: "18px", fontFamily: "serif" }}>Phone:8714189106</h3>
              <h3 style={{ color: "white", fontSize: "18px", fontFamily: "serif", lineHeight: "1px" }}>Phone:8129193098</h3>
              <h3 style={{ color: "white", fontSize: "18px", fontFamily: "serif" }}>Phone:9495046499</h3>

            </div>
            <div className="col-lg-3 col-md-12 mt-4">
              <h2 style={{ color: "white", textAlign: "center" }}>Our Address</h2>
              <h3 style={{ color: "white", fontSize: "18px", textAlign: "left", fontFamily: "serif" }}>Eagle Fleet Services (P) Ltd,ASV Bethel Square, 12/28, Sivaganga Main Rd, Nungambakkam
              </h3>
              <h3 style={{ color: "white", fontSize: "18px", textAlign: "left", fontFamily: "serif", lineHeight: "5px" }}>Chennai-6800005</h3>

            </div>


            <div className="col-lg-3 col-md-12 mt-4">

              <h2 style={{ color: "white", textAlign: "center" }} className="footer-section-title">Quick Links</h2>
              <ul style={{ listStyleType: "none" }} className="quick-links">
                <li style={{ color: "white", fontSize: "18px", textAlign: "center", fontFamily: "serif" }}><a href="#home">Home</a></li>
                <li style={{ color: "white", fontSize: "18px", textAlign: "center", fontFamily: "serif" }}><a href="#about">Contact</a></li>
                <li style={{ color: "white", fontSize: "18px", textAlign: "center", fontFamily: "serif" }}><a href="#services">Blog</a></li>
                <li style={{ color: "white", fontSize: "18px", textAlign: "center", fontFamily: "serif" }}><a href="#contact">Login</a></li>
              </ul>
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
      
      


      

    )



}


export default Booking;