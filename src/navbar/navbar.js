import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import images from '../images/taxi.png';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function Navbar() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername("");
    navigate('/');
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-dark'>
      <img style={{ width: "140px", height: "90px" }} src={images} id='imgicon' alt='img' />
      <Link className="navbar-brand" to="#" style={{ 
      fontSize: "45px", 
      color: "#333", 
     fontFamily:"fantasy",
     letterSpacing:"2px",
      marginLeft: "10px", 
      fontWeight: "bold" 
    }}>
      TAXIWALA
</Link>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{ marginRight: "70px" }}>
          <li className='nav-item'>
            <Link to="/" className="nav-link" id='home' style={{ color: "white", textDecoration: "none" }}>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to="contactus" className="nav-link" id='contact' style={{ color: "white", textDecoration: "none" }}>Contact</Link>
          </li>
          <li className='nav-item'>
            <Link to="travelblog" className="nav-link" id='travelblog' style={{ color: "white", textDecoration: "none" }}>Travelblog</Link>
          </li>
          <li className='nav-item'>
            <Link to="cars" className="nav-link"id='models'  style={{ color: "white", textDecoration: "none" }}>Models</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownCities" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "white", textDecoration: "none" }}>
              Cities
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownCities">
              <li style={{color:"white"}} className="dropdown-item">Kerala</li>
              <li style={{color:"white"}} className="dropdown-item">Chennai</li>
              <li  style={{color:"white"}}className="dropdown-item">Karnataka</li>
              <li style={{color:"white"}} className="dropdown-item">Mumbai</li>
              <li style={{color:"white"}} className="dropdown-item">Delhi</li>
            </ul>
          </li>
          {!username && (
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownLogin" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "white", textDecoration: "none" }}>
              Login
            </Link>
          
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownLogin">
              <li className="dropdown-item">
                <Link to="login" style={{ textDecoration: "none",color:"white",  fontWeight: "bolder", }}>User Login</Link>
              </li>
              <li><hr className="dropdown-divider"></hr></li>
              <li className="dropdown-item">
                <Link to="Adminlogin" style={{ textDecoration: "none", color:"white",fontWeight: "bolder" }}>Admin Login</Link>
              </li>
            </ul>

          </li>
            )}
       
          {username && (
            <li className='nav-item'>
              <span style={{ color: "yellow", textDecoration: "none", display: "inline-block", fontSize: "1rem", marginTop: "5px" }}>
                Welcome, {username}!
              </span>
              <button onClick={handleLogout} className='btn btn-outline-light' style={{ marginLeft: "4px",backgroundColor:"none" }}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
