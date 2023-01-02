import React, { useState } from 'react';
import "./navbar.css";
import { GrGooglePlus } from 'react-icons/gr';
import { GrFacebookOption } from 'react-icons/gr';
import { GrTwitter } from 'react-icons/gr';
import { GrLinkedinOption } from 'react-icons/gr';
import { FaPhoneAlt } from 'react-icons/fa';
import { BsEnvelope } from 'react-icons/bs';
import { ImFire } from 'react-icons/im';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  // block the Upper part of Navbar 
  const [hide, setHide] = useState(false)
  const hideNavbar = () => {
    if(window.scrollY>=90) {
      setHide(true)
    } else {
      setHide(false)
    }
  }
  window.addEventListener('scroll', hideNavbar)

  return (
    <>
    <header className="header">
      <nav className="nav">
        <div className="navbar">
          <div className={hide ? 'block-UpperNavbar' : 'top'}>
            <div className="info">
              <ul>
                <li><FaPhoneAlt/><span>+(1800) 4567800</span></li>
                <li><BsEnvelope/><span>info@resortparadise.com</span></li>
              </ul>
            </div>
            <div className="social-icon">
              <ul>
                <li><GrFacebookOption/></li>
                <li><GrTwitter/></li>
                <li><GrGooglePlus/></li>
                <li><GrLinkedinOption/></li>
              </ul>
            </div>
          </div>
        <div className="bottom">
          <Link to="/" style={{textDecoration: "none", color: "inherit"}}>
          <div className="logo">
            <span className="logoFire"> <ImFire/></span>
            <span className="logoName1">Resort</span>
            <span className="logoName2">Paradise </span>
          </div>
          </Link>
          <div className="menu">
            <ul>
              <li>Home</li>
              <li>Room</li>
              <li>About Us</li>
              <li>Contact US</li>
            </ul>
            {user ? (
              
              <div className="profile">
                <div className="avatar">
                  {/* Background Avatar is here */}
                </div>
                <div className="userName">
                  <span>{user.username}</span>
                </div>
              </div>
            ) : (

            <div className="userButtons">
              {/* <button >Register</button> */}
              {/* <button >Login In</button> */}
              <a href="/login">Login In</a>
            </div>
            )}
          </div>
        </div>
        </div>
        
      </nav>
    </header>
    </>
  );
};

export default Navbar;



