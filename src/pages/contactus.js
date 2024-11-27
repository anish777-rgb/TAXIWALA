import React, { useState } from "react";
import './contactus.css'
import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6"
import { FaTelegram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";




function Contactus(){

  const[values,setValues]=useState({name:"",email:"",phonenumber:"",comments:""});
  const[errors,setErrors]=useState({});
  const navigate=useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();
    const validationErrors=validate();
    setErrors(validationErrors);
    if(Object.keys(validationErrors).length=== 0)
      axios.post('http://localhost:8000/contact',values)
    .then(response=>{
      console.log(response);
       alert('Thanks for Response!');
      navigate('/')
    })
   
    


  }



  const validate=()=>{
    let errors={};

    if(!values.name){
      errors.name="Name is Required"
    }

    if(!values.phonenumber){
      errors.phonenumber="Phone number is Required";
  }  else if (!/^\d{10}$/.test(values.phonenumber)) {
    errors.phonenumber = "Mobile number is invalid";
  }

  if(!values.email){
    errors.email="Email is Required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)){
    errors.email="Email is invalid"
  }
  

  return errors;

}
    return(

        <div className="backcontact">


         
       

        <div className="container" id="con">

          <div className="row justify-content-center">
            
              

              <div className="col-lg-4 col-md-6 "id="first">


                <div className="title">

                  <h3 style={{color:"black",textDecoration:"underline"}}>REACH US, WE ARE HERE TO HELP YOU</h3>

                </div>


                <div className="subtitle">

                  <h5 style={{textAlign:"justify",fontSize:"18px",fontFamily:"serif"}}>Our exemplary services are seamlessly accessible at any hour of the day, ensuring that assistance is readily available even during moments of urgency. Our unwavering commitment to providing top-tier services around the clock has established us as a prestigious and widely recognized name in our industry. The hallmark of our reputation lies in the consistent delivery of high-quality services regardless of the time, reinforcing our status as a dependable and trustworthy entity. Our dedication to being available at all times underscores our commitment to customer satisfaction and sets us apart as a leader in our field. With our relentless focus on accessibility and excellence, we stand ready to meet the needs of our clientele whenever they arise, solidifying our position as a premier provider of unparalleled service.</h5>



                </div>


                <div className="content">
                  <h4 style={{fontSize:"15px",fontWeight:"bolder",fontFamily:"serif",textAlign:"justify"}}>Eagle Fleet Services (P) Ltd,ASV Bethel Square, 12/28,
                  Sivaganga Main Rd, Nungambakkam,Chennai - 600034</h4><br></br>
                  <h4 style={{textAlign:"left",fontSize:"15px",fontWeight:"lighter"}}><IoIosCall />call +91-8714189106</h4>
                  <h4 style={{textAlign:"left",fontSize:"15px",fontWeight:"lighter"}}><IoIosMail />booking@taxiwalaonline.co.in</h4>



                </div>



                   








              </div>  {/* column */}


              <div className="col-lg-4 col-md-6  " id="second">
              <div className="title">

                 <h3 style={{color:"white"}}>CONTACT US</h3>

               </div>

              

               <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label style={{color:"white",textAlign:"left",display:"grid"}} htmlFor="name">Name</label>
                <input type="text" id="name" style={{color:"black"}} className="form-control" placeholder="Enter your name" onChange={e=>setValues({...values,name:e.target.value})} />
               {errors.name && <p style={{fontSize:"18px",color:"yellow",fontFamily:"serif",textShadow:"0px 0px 18px white,0px 0px 18px red"}} className="error">{errors.name}</p>}
              </div>
              <div className="form-group">
                <label style={{color:"white",textAlign:"left",display:"grid"}} htmlFor="email">Email</label>
                <input type="email" id="email" className="form-control" placeholder="Enter your email"  onChange={e=>setValues({...values,email:e.target.value})}/>
                {errors.email && <p style={{fontSize:"18px",color:"yellow",fontFamily:"serif",textShadow:"0px 0px 18px white,0px 0px 18px red"}} className="error">{errors.email}</p>}

              </div>
              <div className="form-group">
                <label style={{color:"white",textAlign:"left",display:"grid"}} htmlFor="number">Phone Number</label>
                <input type="tel" id="number"  style={{color:"black"}}className="form-control" placeholder="Enter your number"  onChange={e=>setValues({...values,phonenumber:e.target.value})} />
                {errors.phonenumber && <p style={{fontSize:"18px",color:"yellow",fontFamily:"serif",textShadow:"0px 0px 18px white,0px 0px 18px red"}} className="error">{errors.phonenumber}</p>}

              </div>
              <div className="form-group">
                <label style={{color:"white",textAlign:"left",display:"grid"}} htmlFor="comments">Comments</label>
                <textarea id="comments" className="form-control" rows="3" placeholder="Enter your comments"  onChange={e=>setValues({...values,comments:e.target.value})}></textarea>
              </div>
              <button type="submit" id="cntbtn">Submit</button>
            </form>



              






              </div>  {/* column */}
          </div>  {/*row */}
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



    )



}

export default Contactus;