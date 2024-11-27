import React, { useEffect } from "react";
import './home.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom";
import 'aos/dist/aos.css';
import AOS from 'aos';




import delivery from '../images/delivery.png'

import tax1 from '../images/tax1.jpg';
import tax2 from '../images/tax2.jpg';
import tax3 from '../images/tax3.png';
import c1 from '../images/c1.png';
import c2 from '../images/c2.png';
import c3 from '../images/c3.png'
import { FaCheckCircle } from "react-icons/fa";
import abouttax from '../images/abouttax.png';
import neethu from '../images/neethu.jpg'
import ajith from '../images/ajith.jpg'





import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaClock, FaCar, FaHandshake, FaBook, FaMoneyBill, FaShieldAlt } from 'react-icons/fa';
import { FaArrowRight, FaDownload, FaPlaneDeparture } from 'react-icons/fa';


import city from '../images/city.png'
import diagram from '../images/diagram.png';
import power from '../images/power.png'



import a from '../images/a.png';
import b from '../images/b.png';
import c from '../images/c.jpg';
import d from '../images/d.jpg';
import e from '../images/e.png';
import f from '../images/f.jpg';
import g from '../images/g.jpg';
import h from '../images/h.jpg';
import i from  '../images/i.jpg';
import j from  '../images/j.jpg';
import k from  '../images/k.jpg';
import l from  '../images/l.png';
import ab from '../images/ab.jpg';
import abc from '../images/abc.jpg';
import abcd from '../images/abcd.jpg';


















function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1500,




    });
  });




  return (




    <div className="backgroundhome" >
<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={abcd} className="d-block w-100" alt="Yellow Taxi in City" style={{ height: "100vh", objectFit: "cover" }}></img>
      <div className="carousel-caption d-flex flex-column align-items-center h-100 justify-content-center">
        <h5 className="bg-dark bg-opacity-50 text-white p-3 rounded" style={{ fontSize: "clamp(20px, 4vw, 28px)", marginTop: "30px" }}>
          We pride ourselves on delivering a superior taxi service that you can trust
        </h5>
        <Link to="cars" className="btn btn-outline-light mt-3" style={{ fontSize: "clamp(14px, 2vw, 18px)" }}>BOOK NOW</Link>
      </div>
    </div>
    <div className="carousel-item">
      <img src={ab} className="d-block w-100" alt="Taxi Booking App" style={{ height: "100vh", objectFit: "cover" }}></img>
      <div className="carousel-caption d-flex flex-column align-items-center h-100 justify-content-center">
        <h5 className="bg-dark bg-opacity-50 text-white p-3 rounded" style={{ fontSize: "clamp(20px, 4vw, 28px)", marginTop: "30px" }}>
          Book your ride effortlessly with our easy-to-use platform
        </h5>
        <Link to="cars" className="btn btn-outline-light mt-3" style={{ fontSize: "clamp(14px, 2vw, 18px)" }}>BOOK NOW</Link>
      </div>
    </div>
    <div className="carousel-item">
      <img src={abc} className="d-block w-100" alt="Happy Taxi Riders" style={{ height: "100vh", objectFit: "cover" }}></img>
      <div className="carousel-caption d-flex flex-column align-items-center h-100 justify-content-center">
        <h5 className="bg-dark bg-opacity-50 text-white p-3 rounded" style={{ fontSize: "clamp(20px, 4vw, 28px)", marginTop: "30px" }}>
          Looking for a ride? You’ve come to the right place! At Taxiwala.
        </h5>
        <Link to="cars" className="btn btn-outline-light mt-3" style={{ fontSize: "clamp(14px, 2vw, 18px)" }}>BOOK NOW</Link>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>



      <div className="fair">
  <div className="container mt-5"
    style={{
      background: "linear-gradient(135deg, rgb(199, 195, 140), #ffffff, rgb(199, 195, 140))",
      borderRadius: "12px",
      padding: "20px",
      boxShadow: "0px 0px 20px rgba(0,0,0,0.2)"
    }} id="faircontainer">
    <h3 style={{
      textAlign: "center",
      fontSize: "45px",
      fontWeight: "bold",
      color: "#333",
      letterSpacing: "2px",
      textTransform: "uppercase",
      textShadow: "2px 2px rgba(0,0,0,0.1)"
    }}>Taxi Rates</h3>
    <div className="table-responsive">
      <table className="table table-striped table-bordered table-hover mt-4 mb-5"
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0px 0px 15px rgba(0,0,0,0.2)",
          borderCollapse: "separate",
          borderSpacing: "0 10px"
        }}>
        <thead>
          <tr style={{ backgroundColor: "#007BFF", color: "#ffffff" }}>
            <th style={{
              padding: "15px",
              borderBottom: "5px solid yellow",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
           
            }}>MODEL</th>
            <th style={{
              padding: "15px",
              borderBottom: "5px solid yellow"
            }}>BASE FARE (₹)</th>
            <th style={{
              padding: "15px",
              borderBottom: "5px solid yellow"
            }}>PER KM (₹)</th>
            <th style={{
              padding: "15px",
              borderBottom: "5px solid yellow"
            }}>PER MINUTE (₹)</th>
            <th style={{
              padding: "15px",
              borderBottom: "5px solid yellow",
              borderTopRightRadius: "12px"
            }}>SURCHARGES</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ backgroundColor: "#f2f9ff", cursor: "pointer" }}>
            <td style={{ padding: "15px" }}>Sedan</td>
            <td style={{ padding: "15px" }}>₹250.00</td>
            <td style={{ padding: "15px" }}>₹200.00</td>
            <td style={{ padding: "15px" }}>₹40.00</td>
            <td style={{ padding: "15px" }}>None</td>
          </tr>
          <tr style={{ backgroundColor: "#e6f0ff", cursor: "pointer" }}>
            <td style={{ padding: "15px" }}>SUV</td>
            <td style={{ padding: "15px" }}>₹400.00</td>
            <td style={{ padding: "15px" }}>₹240.00</td>
            <td style={{ padding: "15px" }}>₹56.00</td>
            <td style={{ padding: "15px" }}>None</td>
          </tr>
          <tr style={{ backgroundColor: "#f2f9ff", cursor: "pointer" }}>
            <td style={{ padding: "15px" }}>MUV</td>
            <td style={{ padding: "15px" }}>₹640.00</td>
            <td style={{ padding: "15px" }}>₹360.00</td>
            <td style={{ padding: "15px" }}>₹80.00</td>
            <td style={{ padding: "15px" }}>None</td>
          </tr>
          <tr style={{ backgroundColor: "#e6f0ff", cursor: "pointer" }}>
            <td style={{ padding: "15px" }}>Compact</td>
            <td style={{ padding: "15px" }}>₹560.00</td>
            <td style={{ padding: "15px" }}>₹160.00</td>
            <td style={{ padding: "15px" }}>₹32.00</td>
            <td style={{ padding: "15px" }}>Night Surcharge: ₹400.00</td>
          </tr>
          <tr style={{ backgroundColor: "#f2f9ff", cursor: "pointer" }}>
            <td style={{ padding: "15px" }}>Luxury</td>
            <td style={{ padding: "15px" }}>₹800.00</td>
            <td style={{ padding: "15px" }}>₹400.00</td>
            <td style={{ padding: "15px" }}>₹64.00</td>
            <td style={{ padding: "15px" }}>Night Surcharge: ₹640.00</td>
          </tr>
          <tr style={{ backgroundColor: "#e6f0ff", cursor: "pointer" }}>
            <td style={{ padding: "15px" }}>Hatchback</td>
            <td style={{ padding: "15px" }}>₹160.00</td>
            <td style={{ padding: "15px" }}>₹80.00</td>
            <td style={{ padding: "15px" }}>₹24.00</td>
            <td style={{ padding: "15px" }}>None</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>



      <div className="abouthome">
        <div class="container" data-aos="fade-up"
          data-aos-anchor-placement="top-center">
          <div class="row">

            <div class="image-column col-lg-6 col-md-12 col-sm-6 img-fluid">
              <img style={{ marginTop: "10px", height: "auto", width: "100%" }} id="abouttax" src={abouttax} alt="about"></img>


            </div>


            <div class=" col-lg-6 col-md-12 col-sm-12 ">
              <div class="inner-column">
                <div class="title">
                  <h3 style={{
                    textAlign: "center",
                    fontSize: "45px",
                    fontWeight: "bold",
                    color: "#333",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    textShadow: "2px 2px #ddd"
                  }} >About us</h3>

                </div>
                <div class="text" style={{ fontSize: "20px", textAlign: "justify", marginTop: "25px",fontFamily:"serif" }}>Welcome to <strong>TAXIWALA</strong>, your reliable and convenient taxi booking platform. At Taxiwala, we are dedicated to providing seamless and efficient transportation solutions to meet your travel needs. Whether you're commuting to work, heading to the airport, or exploring the city, our user-friendly platform ensures that you can book a ride with ease and confidence.
                </div>
                <div class="text " style={{ fontSize: "20px", textAlign: "justify", marginTop: "100px",fontFamily:"serif" }}>Founded in <strong>2018</strong>, <strong>TAXIWALA</strong> was born out of a passion for delivering exceptional customer service in the transportation industry. We started with a few cars and a dream, and today, we proudly serve thousands of satisfied customers every month.Over the years, we have built strong relationships with our customers by consistently delivering on our promises. We listen to their feedback and continuously strive to exceed their expectations. Whether it's a quick ride to the airport, a business trip, or a night out on the town, TAXIWALA is dedicated to making every journey a pleasant and memorable experience.

                </div>

              </div>
            </div>


          </div>
          <div class="title">

            <h2 style={{ textAlign: "left", marginTop: "35px", marginLeft: "30px" }}>Our mission</h2>
          </div>
          <ul style={{ fontSize: "21px", fontFamily: "serif" }}>
            <li style={{ textAlign: "left", listStyleType: "none" }}><i style={{ color: "green", marginRight: "4px" }}><FaCheckCircle /></i>Easy Booking Process: Our intuitive website and app allow you to book a taxi in just a few clicks.</li>
            <li style={{ textAlign: "left", listStyleType: "none" }}><i style={{ color: "green", marginRight: "4px" }}><FaCheckCircle /></i>Reliable Service: We partner with professional and courteous drivers to ensure a safe and comfortable journey.</li>
            <li style={{ textAlign: "left", listStyleType: "none" }}><i style={{ color: "green", marginRight: "4px" }}><FaCheckCircle /></i>Transparent Pricing: With no hidden fees, you always know what to expect, making budgeting for your trip straightforward.</li>
            <li style={{ textAlign: "left", listStyleType: "none" }}><i style={{ color: "green", marginRight: "4px" }}><FaCheckCircle /></i> 24/7 Availability: Whether it's day or night, you can count on us to be there when you need a ride.</li>
          </ul>

        </div>
        
     

      <div className="container mt-5">
        <h2 className="text-center"
                 
                  >WHY CHOOSE US?</h2>
        <div className="row mt-5">
          <div className="col-md-4 mb-4">
            <div className="card card-why-choose-us text-center p-3"  data-aos="zoom-in-down" >
              <FaClock size={50} style={{ color: '#ff6f61' }} />
              <h5 style={{ fontWeight: "normal", color: 'black' }} className="card-title-why-choose-us">24/7 Availability</h5>
              <p className="card-text-why-choose-us text-center">Our services are available round the clock.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card card-why-choose-us text-center p-3"  data-aos="zoom-in-down" >
              <FaCar size={50} style={{ color: '#ffc107' }} />
              <h5 style={{ fontWeight: "normal", color: 'black' }} className="card-title-why-choose-us">Professional Drivers</h5>
              <p className="card-text-why-choose-us text-center">Our drivers prioritize your safety and comfort.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card card-why-choose-us text-center p-3"  data-aos="zoom-in-down" >
              <FaHandshake size={50} style={{ color: '#28a745' }} />
              <h5 style={{ fontWeight: "normal", color: 'black' }} className="card-title-why-choose-us">Clean and Comfortable Vehicles</h5>
              <p className="card-text-why-choose-us text-center">Our fleet is modern and well-maintained.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card card-why-choose-us text-center p-3"   data-aos="zoom-in-down">
              <FaBook size={50} style={{ color: '#17a2b8' }} />
              <h5 style={{ fontWeight: "normal", color: 'black' }} className="card-title-why-choose-us">Easy Booking</h5>
              <p className="card-text-why-choose-us text-center">Book your ride easily through our app or website.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card card-why-choose-us text-center p-3"  data-aos="zoom-in-down" >
              <FaMoneyBill size={50} style={{ color: '#ffc107' }} />
              <h5 style={{ fontWeight: "normal", color: 'black' }} className="card-title-why-choose-us">Competitive Rates</h5>
              <p className="card-text-why-choose-us text-center">Fair pricing with no hidden charges.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card card-why-choose-us text-center p-3"  data-aos="zoom-in-down">
              <FaShieldAlt size={50} style={{ color: '#ff6f61' }} />
              <h5 style={{ fontWeight: "normal", color: 'black' }} className="card-title-why-choose-us">Safety First</h5>
              <p className="card-text-why-choose-us text-center">Ensuring your safety with every ride.</p>
            </div>
          </div>
        </div>
      </div>
      </div>

     




      <div className="global" style={{ backgroundColor: "white", padding: "60px 0" }}>
  <div className="container">
    
  
    <div className="row">
      <div className="col-12">
        <h3 style={{
          textAlign: "center",
          fontSize: "45px",
          fontWeight: "bold",
          color: "#333",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          marginBottom: "40px"
        }}>
          Global Mobility Ecosystem Driving Communities Forward
        </h3>
      </div>
    </div>
    
    
    <div className="row text-center">
      
     
      <div className="col-md-4 mb-4">
        <img src={city} className="globalpic img-fluid" alt="Cities Covered" style={{ marginBottom: "20px", borderRadius: "8px" }} />
        <p style={{ fontSize: "50px", fontWeight: "600", color: "#c7ae0b",textAlign:"center" }}>250+</p>
        <div style={{ minHeight: "100px" }}>
          <p style={{ fontSize: "18px", fontWeight: "500", color: "#333",textAlign:"center" }}>Cities Covered</p>
          <p style={{ fontSize: "16px", color: "#555",textAlign:"center" }}>Across Kerala, Bangalore, Chennai, and Delhi</p>
        </div>
      </div>
      
     
      <div className="col-md-4 mb-4">
        <img src={power} className="globalpic img-fluid" alt="Yearly Rides" style={{ marginBottom: "20px", borderRadius: "8px" }} />
        <p style={{ fontSize: "50px", fontWeight: "600", color: "#c7ae0b",textAlign:"center" }}>5Cr+</p>
        <div style={{ minHeight: "100px" }}>
          <p style={{ fontSize: "18px", fontWeight: "500", color: "#333",textAlign:"center" }}>Yearly Rides</p>
          <p style={{ fontSize: "16px", color: "#555",textAlign:"center" }}>Booked by our customers every year</p>
        </div>
      </div>
      
      <div className="col-md-4 mb-4">
        <img src={diagram} className="globalpic img-fluid" alt="Kilometers Covered" style={{ marginBottom: "20px", borderRadius: "8px" }} />
        <p style={{ fontSize: "50px", fontWeight: "600", color: "#c7ae0b",textAlign:"center" }}>12Cr+</p>
        <div style={{ minHeight: "100px" }}>
          <p style={{ fontSize: "18px", fontWeight: "500", color: "#333",textAlign:"center" }}>Kilometers</p>
          <p style={{ fontSize: "16px", color: "#555",textAlign:"center" }}>Distance covered in a year</p>
        </div>
      </div>
      
    </div>
  </div>
</div>


      <div className="workers">
  <div className="our-drivers-section text-center mt-5">
    <div className="container">
      <h3
        style={{
          textAlign: "left",
          fontSize: "45px",
          fontWeight: "bold",
          color: "#333",
          letterSpacing: "2px",
          textTransform: "uppercase",
          textShadow: "2px 2px #ddd"
        }}
        className="mb-4"
      >
        Our Senior Drivers
      </h3>
      <p style={{fontFamily:"serif"}}
        className="lead mb-5"
      >
        Meet our team of dedicated drivers who have been with us for over 5 years, consistently ensuring a safe and pleasant journey for every passenger. These experienced professionals are the backbone of our service, bringing a wealth of knowledge and expertise to each ride. Their extensive tenure with us reflects their unwavering commitment to excellence and their passion for delivering exceptional service. With a deep understanding of local routes and a keen eye for detail, our drivers are not only skilled behind the wheel but also attentive to your comfort and needs. Each journey with them is not just about reaching your destination but about enjoying a smooth, reliable, and enjoyable experience. Trust in their years of dedication and let them make your travels both convenient and memorable.
      </p>
      <div className="row">
        <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
          <div className="card card-driver  shadow-sm h-100"  data-aos="flip-right">
            <img src={a} className="card-img-top rounded-circle p-3" alt="Tan" />
            <div className="card-body">
              <h5 className="card-title">Tan</h5>
              <p style={{ fontSize: "12px",}} className="card-text">
                Loyal driver with 10+ years of dedicated service.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
          <div className="card card-driver shadow-sm h-100" data-aos="flip-right">
            <img src={b} className="card-img-top rounded-circle p-3" alt="Ajay" />
            <div className="card-body">
              <h5 className="card-title">Ajay</h5>
              <p style={{ fontSize: "12px",}} className="card-text">
                Trusted driver known for reliability and professionalism.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
          <div className="card card-driver  shadow-sm h-100" data-aos="flip-right">
            <img src={c} className="card-img-top rounded-circle p-3" alt="Carlos" />
            <div className="card-body">
              <h5 className="card-title">Carlos</h5>
              <p style={{ fontSize: "12px",}} className="card-text">
                Dedicated driver with a strong commitment to safety.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
          <div className="card card-driver  shadow-sm h-100" data-aos="flip-right">
            <img src={d} className="card-img-top rounded-circle p-3" alt="Beckham" />
            <div className="card-body">
              <h5 className="card-title">Beckham</h5>
              <p style={{ fontSize: "12px",}} className="card-text">
                Professional driver with a passion for customer service.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
          <div className="card card-driver  shadow-sm h-100" data-aos="flip-right">
            <img src={e} className="card-img-top rounded-circle p-3" alt="Michael" />
            <div className="card-body">
              <h5 className="card-title">Michael</h5>
              <p style={{ fontSize: "12px",}}className="card-text">
                Reliable driver with over a decade of experience.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
          <div className="card card-driver  shadow-sm h-100" data-aos="flip-right">
            <img src={f} className="card-img-top rounded-circle p-3" alt="Jans" />
            <div className="card-body">
              <h5 className="card-title">Jans</h5>
              <p style={{ fontSize: "12px",}} className="card-text">
                Experienced driver ensuring a comfortable ride every time.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
          <div className="card card-driver  shadow-sm h-100" data-aos="flip-right">
            <img src={g} className="card-img-top rounded-circle p-3" alt="Lia" />
            <div className="card-body">
              <h5 className="card-title">Lia</h5>
              <p style={{ fontSize: "12px",}} className="card-text">
                Committed to providing a safe and enjoyable journey.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
          <div className="card card-driver  shadow-sm h-100" data-aos="flip-right">
            <img src={h} className="card-img-top rounded-circle p-3" alt="Emily" />
            <div className="card-body">
              <h5 className="card-title">Emily</h5>
              <p style={{ fontSize: "12px",}} className="card-text">
                Friendly and helpful, with years of trusted service.
              </p>
            </div>
          </div>
        </div>
       
        <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
          <div className="card card-driver  shadow-sm h-100" data-aos="flip-right">
            <img src={i} className="card-img-top rounded-circle p-3" alt="Sophia" />
            <div className="card-body">
              <h5 className="card-title">Sophia</h5>
              <p style={{ fontSize: "12px",}} className="card-text">
                Skilled driver with exceptional service and dedication.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
          <div className="card card-driver  shadow-sm h-100" data-aos="flip-right">
            <img src={j} className="card-img-top rounded-circle p-3" alt="Oliver" />
            <div className="card-body">
              <h5 className="card-title">Oliver</h5>
              <p style={{ fontSize: "12px",}}className="card-text">
                Dependable driver known for his punctuality and efficiency.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
          <div className="card card-driver  shadow-sm h-100" data-aos="flip-right">
            <img src={k} className="card-img-top rounded-circle p-3" alt="Amelia" />
            <div className="card-body">
              <h5 className="card-title">Amelia</h5>
              <p style={{ fontSize: "12px"}} className="card-text">Experienced driver with a focus on customer satisfaction.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
          <div className="card card-driver  shadow-sm h-100" data-aos="flip-right">
            <img src={l} className="card-img-top rounded-circle p-3" alt="Ethan" />
            <div className="card-body">
              <h5 className="card-title">Ethan</h5>
              <p style={{ fontSize: "12px",}} className="card-text">
                Reliable driver with extensive experience and a positive attitude.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      
      <div className="slidecar">
        <div class="container-fluid">
          <div id="demo" class="carousel slide" data-bs-ride="carousel">

            <div class="carousel-indicators">
              <button type="button " id="btn" data-bs-target="#demo" data-bs-slide-to="0"
                class="active"></button>
              <button type="button" id="btn" data-bs-target="#demo"
                data-bs-slide-to="1"></button>
              <button type="button" id="btn" data-bs-target="#demo"
                data-bs-slide-to="2"></button>
            </div>

            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row">
                  <div class="col-md-6">
                    <img src={c1} alt="Los Angeles" class="d-block w-100"></img>
                  </div>
                  <div class="col-md-5">

                    <h3 >SUV</h3>
                    <p style={{ fontFamily: "arial", fontSize: "18px" }}>A Complete Business Class Ride
                      "Make a cozy comfortable ride with TaxiWALA.. Yes, Taxiwala gives you a complete business class ride in well maintained business class vehicles. Vehicles in this segment are sedans which gives you more comfort in your rides. Use this cabs for your comfortable family rides and business trips. More suitable for long drives and outstations..."</p>
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <div class="row">
                  <div class="col-md-6">
                    <img src={c2} alt="Los Angeles" class="d-block w-100"></img>
                  </div>
                  <div class="col-md-5">

                    <h3>SEDAN</h3>
                    <p style={{ fontFamily: "arial", fontSize: "18px" }}>"Taxiwala offer a comfortable, hassle-free, and affordable taxi service in Thrissur. We provide an easy and convenient way of booking our Sedan cabs, book through the web. Our wide range of fleets is available for all your travel needs at anytime and anywhere. We provide doorstep pickup and drop to offer you a convenient way to travel everywhere."</p>
                  </div>
                </div>
              </div>

              <div class="carousel-item ">
                <div class="row">
                  <div class="col-md-6">
                    <img src={c3} alt="Los Angeles" class="d-block w-100"></img>
                  </div>
                  <div class="col-md-5">

                    <h3>LUXURY</h3>
                    <p style={{ fontFamily: "arial", fontSize: "18px" }}>"Experience the pinnacle of luxury travel with our exclusive luxury taxi service. Step into a world of comfort, sophistication, and unparalleled service as our expert chauffeurs take you to your destination in style. With plush interiors, state-of-the-art amenities, and impeccable attention to detail, every journey with us is a journey to remember. Elevate your travel experience and indulge in luxury from the moment you step into our prestigious fleet. Your comfort is our priority."</p>
                  </div>
                </div>
              </div>


              <button class="carousel-control-prev" type="button"
                data-bs-target="#demo" data-bs-slide="prev">
                <span class="carousel-control-prev-icon bg-dark"></span>
              </button>
              <button class="carousel-control-next" type="button"
                data-bs-target="#demo" data-bs-slide="next">
                <span class="carousel-control-next-icon bg-dark"></span>
              </button>
            </div>



          </div>
        </div>
      </div>

      <div className="review">
        <div className="container ">
          <div className="row d-flex justify-content-center">
            <div className="col-md-10 col-xl-8 text-center">
              <h3 style={{
                textAlign: "center",
                fontSize: "45px",
                fontWeight: "bold",
                color: "#333",
                letterSpacing: "2px",
                textTransform: "uppercase",
                textShadow: "2px 2px #ddd"

              }} className="mb-4">Client Feedback</h3>

            </div>
          </div>

          <div className="row text-center d-flex align-items-stretch">
            <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
              <div className="card testimonial-card">
                <div className="card-up" style={{ backgroundColor: '#9d789b' }}></div>
                <div className="avatar mx-auto bg-white">
                  <img src={neethu} className="rounded-circle img-fluid" alt="Maria Smantha" />
                </div>
                <div className="card-body">
                  <h4 className="mb-4">Neethu Pyli</h4>
                  <hr />
                  <p className="dark-grey-text mt-4" style={{ fontFamily: "serif", fontSize: "18px" }}>
                    <i className="fas fa-quote-left pe-2"></i>"Booking a taxi with Taxiwala was seamless and quick. The driver was punctual and professional, and the car was spotless. Highly recommend for a hassle-free ride!"
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
              <div className="card testimonial-card">
                <div className="card-up" style={{ backgroundColor: '#7a81a8' }}></div>
                <div className="avatar mx-auto bg-white">
                  <img src={ajith} className="rounded-circle img-fluid" alt="Lisa Cudrow" />
                </div>
                <div className="card-body">
                  <h4 className="mb-4">Ajith Thambi</h4>
                  <hr />
                  <p className="dark-grey-text mt-4" style={{ fontFamily: "serif", fontSize: "18px" }}>
                    <i className="fas fa-quote-left pe-2"></i>Excellent service from start to finish! The booking app is easy to use, the driver was courteous, and the ride was smooth and comfortable. Will definitely use taxiwala again.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-0 d-flex align-items-stretch">
              <div className="card testimonial-card">
                <div className="card-up" style={{ backgroundColor: '#6d5b98' }}></div>
                <div className="avatar mx-auto bg-white">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" className="rounded-circle img-fluid" alt="John Smith" />
                </div>
                <div className="card-body">
                  <h4 className="mb-4">John Smith</h4>
                  <hr />
                  <p className="dark-grey-text mt-4" style={{ fontFamily: "serif", fontSize: "18px" }}>
                    <i className="fas fa-quote-left pe-2"></i>Impressed with the prompt arrival and clean vehicle. The driver was friendly and efficient, making my commute stress-free. Taxiwala is my go-to for reliable transportation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="twenty" style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="row align-items-center text-center text-lg-left">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="text-box" style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '30px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: '#333' }}>24/7 Customer Service</h2>
                <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#555' }}>
                  Our customer service system operates 24/7, ensuring uninterrupted support for all our passengers. We understand that travel needs don’t adhere to regular business hours, which is why our dedicated team is always available via phone, email, live chat, and social media. Whether you're booking a ride or need assistance, we provide timely and multilingual support tailored to your preferences. Our well-trained representatives are here to assist you with any queries, complemented by self-service options like FAQs and community forums to empower you further.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="image-container" style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden' }}>
                <img src={delivery} alt="deliveryboyimage" style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.3s ease' }} />
                <div className="overlay" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.3)', transition: 'opacity 0.3s ease', opacity: '0' }}>
                  <div className="text" style={{ color: '#fff', textAlign: 'center', padding: '20px', position: 'absolute', bottom: '0', left: '0', width: '100%' }}>
                    <h3>Reliable Service</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className="offer">
        <div className="container mt-5">
          <div className="row text-center mb-4">
            <h1 style={{ fontSize: "30px", color: "GrayText" }}>SPECIAL OFFERS</h1>
          </div>
          <div className="row">

            <div className="col-md-12">

              <div className="card-group">

                <div className="card card-offer">
                  <img src={tax1} className="card-img-top" alt="Travel Offer" />
                  <div className="card-body">
                    <h5 className="card-title text-center">KERALA- BANGLORE <FaArrowRight /></h5>
                    <h3 style={{ fontFamily: "serif" }} className="card-text">Make a trip from Banglore to Erode or from Erode to Coimbatore at an affordable rate.</h3>
                    <h4 className="card-text"><small className="text-muted">Updated last min ago</small></h4>
                  </div>
                </div>

                <div className="card card-offer">
                  <img src={tax2} className="card-img-top" alt="App Offer" />
                  <div className="card-body">
                    <h5 className="card-title text-center">DOWNLOAD APP <FaDownload /></h5>
                    <h3 style={{ fontFamily: "serif" }} className="card-text">Download app and get 10% discount on your trip. Grab the opportunity now and make your trip!</h3>
                    <h4 className="card-text"><small className="text-muted">Updated last min ago</small></h4>
                  </div>
                </div>

                <div className="card card-offer">
                  <img src={tax3} className="card-img-top" alt="Price Drop Offer" />
                  <div className="card-body">
                    <h5 className="card-title text-center">PRICE DROP <FaPlaneDeparture /></h5>
                    <h3 style={{ fontFamily: "serif" }} className="card-text">Airport drop at the price of 634/-. From Banglore, limited offers. Grab now, call Taxiwalla now!</h3>
                    <h4 className="card-text"><small className="text-muted">Updated last min ago</small></h4>
                  </div>
                </div>

              </div>
            </div>
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
              <h3 style={{ color: "white", textAlign: "center", fontSize: "18px", fontFamily: "serif" }}>Home</h3>
              <h3 style={{ color: "white", textAlign: "center", fontSize: "18px", fontFamily: "serif" }}>contact</h3>
              <h3 style={{ color: "white", textAlign: "center", fontSize: "18px", fontFamily: "serif" }}>login</h3>
              <h3 style={{ color: "white", textAlign: "center", fontSize: "18px", fontFamily: "serif" }}>booking</h3>




            </div>


            <hr style={{ color: "white" }}></hr>
            <div class="row mt-3"  >
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


export default Home;