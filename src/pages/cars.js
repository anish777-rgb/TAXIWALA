import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './cars.css'
import sedan from '../images/sedan.png'
import suv from '../images/suv.png'
import muv from '../images/muv.png'
import taxiwala from '../images/taxiwala.png'
import luxary from '../images/luxary.png'
import swift from '../images/swift.png'
import { useNavigate } from "react-router-dom";

import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";



function Cars(){

  const [username, setUsername] = useState("")

const navigate=useNavigate();


useEffect(() => {

  const storedUsername = localStorage.getItem("username")

  if (storedUsername) {
      setUsername(storedUsername);
  }


}, []);



const book=(cartype)=>{
   
   navigate("/booking",{state:{cartype}})
   
}







    return(



        <div className="carbackground">


            <div className="container">

                <div className="row">

                    <div className="card-group">

                         <div className="col-md-6">


                            <div class="card card-car"  >
                              <img src={sedan}class="card-img-top" alt="sedan"></img>

                               <div class="card-body">
                               <h3 class="card-title">SEDAN</h3>
                               <p class="card-text">Sedan taxi cars are a popular choice for taxi services due to their balance of comfort, efficiency, and cost-effectiveness. They are ideal for individual travelers, small groups, and business passengers looking for a reliable and comfortable transportation option</p>
                               {username ? (
                               <button className="book" onClick={()=>book("Sedan")}>Book Now</button>
                                
                              ) : (
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    style={{ borderRadius: '15px' }}
                                    
                                >
                                    LOGIN TO BOOK
                                </button>
                            )}
                            </div>
                                  
                            </div> {/*card */}







                         </div>                   {/* col */}


                            <div className="col-md-6">


                            <div class="card card-car"  >
                               <img src={suv}class="card-img-top " alt=""></img>

                               <div class="card-body">
                               <h3 class="card-title">SUV</h3>
                               <p class="card-text">SUV taxi cars are a popular choice for those needing extra space, comfort, and capability. They are particularly suited for families, groups, and passengers with substantial luggage, offering a versatile and reliable transportation option across various terrains and conditions.</p>
                               {username ? (
                               <button className="book" onClick={()=>book("Suv")}>Book Now</button>
                              ) : (
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    style={{ borderRadius: '15px' }}
                                    
                                >
                                    LOGIN TO BOOK
                                </button>
                            )}

                                </div>
                                  
                            </div> {/*card */}







                         </div>                   {/* col */}





        
                     </div>              {/* card-group */}


                    
                </div>                       {/* row 1 */}







                 <div className="row">

                    <div className="card-group">

                         <div className="col-md-6">


                            <div class="card card-car"  >
                               <img src={muv}class="card-img-top" alt=""></img>

                               <div class="card-body">
                               <h3 class="card-title">MUV</h3>
                               <p class="card-text">An MUV taxi car, also known as a multi-utility vehicle taxi, is a type of vehicle used for passenger transportation that combines the features of a minivan and an SUV. Here are some key points about MUV taxi cars.MUV taxi cars are a popular choice for transporting larger groups of passengers or those needing extra luggage space.</p>
                               {username ? (
                               <button className="book" onClick={()=>book("Muv")}>Book Now</button>
                              ) : (
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    style={{ borderRadius: '15px' }}
                                    
                                >
                                    LOGIN TO BOOK
                                </button>
                            )}
                                </div>
                                  
                            </div> {/*card */}







                         </div>                   {/* col */}


                            <div className="col-md-6">


                            <div class="card card-car"  >
                               <img src={taxiwala}class="card-img-top" alt=""></img>

                               <div class="card-body">
                               <h3 class="card-title">COMPACT</h3>
                               <p class="card-text">An ordinary taxi, often simply referred to as a standard or conventional taxi, is a common mode of transportation available in most urban and suburban areas. These taxis are typically sedans or compact cars that offer affordable and convenient transportation for individuals and small groups. .</p>
                               {username ? (
                               <button className="book" onClick={()=>book("Compact")}>Book Now</button>
                              ) : (
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    style={{ borderRadius: '15px' }}
                                    
                                >
                                    LOGIN TO BOOK
                                </button>
                            )}
                                </div>
                                  
                            </div> {/*card */}







                         </div>                   {/* col */}





        
                     </div>              {/* card-group */}


                    
                </div>                       {/* row 2 */}



                  <div className="row">

                    <div className="card-group">

                         <div className="col-md-6">


                            <div class="card card-car"  >
                               <img src={luxary}class="card-img-top" alt=""></img>

                               <div class="card-body">
                               <h3 class="card-title">LUXURY</h3>
                               <p class="card-text">Experience the pinnacle of luxury travel with our exclusive luxury taxi service. Step into a world of comfort, sophistication, and unparalleled service as our expert chauffeurs take you to your destination in style. With plush interiors, state-of-the-art amenities, and impeccable attention to detail, every journey with us is a journey to remember.</p>
                               {username ? (
                               <button className="book" onClick={()=>book("Luxury")}>Book Now</button>
                              ) : (
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    style={{ borderRadius: '15px' }}
                                    
                                >
                                    LOGIN TO BOOK
                                </button>
                            )}
                                </div>
                                  
                            </div> {/*card */}







                         </div>                   {/* col */}


                            <div className="col-md-6">


                            <div class="card card-car"  >
                               <img src={swift}class="card-img-top" alt=""></img>

                               <div class="card-body">
                               <h3 class="card-title">HATCHBACK</h3>
                               <p class="card-text">Hatchbacks feature a rear door that swings upward, providing easy access to the cargo area. This design maximizes interior space, making them suitable for carrying both passengers and luggage.Hatchback taxi cars are a popular choice for urban transportation services due to their practical design and efficient use of space.</p>
                               {username ? (
                               <button className="book" onClick={()=>book("Hatchback")}>Book Now</button>
                              ) : (
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    style={{ borderRadius: '15px' }}
                                    
                                >
                                    LOGIN TO BOOK
                                </button>
                            )}
                                </div>
                                  
                            </div> {/*card */}







                         </div>                   {/* col */}





        
                     </div>              {/* card-group */}


                    
                </div>                       {/* row 3 */}









               










             </div>                          {/*  conatainer */}


             <div class="footer">
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




             
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
         </div>     // carbackground

















    )




}



export default Cars;