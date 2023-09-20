import React, { useEffect, useState } from "react";
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BiSearchAlt2 } from "react-icons/bi";
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import { NavLink,useNavigate} from 'react-router-dom';
import { Slideshow } from "./slider";
import './home.css';
import Searchbar from "./searchbar";
import { CgCommunity } from "react-icons/cg";
import Footer from "./footer";
export const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const Search=()=>{
    document.getElementById("search").style.display="";
  }
  
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);

  const toggleLoginDropdown = () => {
    setLoginDropdownOpen(!loginDropdownOpen);
  };
  
  return (
    <body>

    
    
<nav>
      <Link to="/" className="title">
        <div><CgCommunity /> CO-ALMS</div>
        {/* <div>Co-alms</div> */}
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/search"><BiSearchAlt2 /></NavLink>
        </li>
        <li>
          <NavLink to="/ulogin">Uni_login</NavLink>
        </li>
        <li>
          <div className="login-dropdown" onClick={toggleLoginDropdown}>
            Login ▼ {/* Dropdown indicator */}
            {loginDropdownOpen && (
              <ul className="login-options">
                <li><a href="/alumnilogin">Alumni</a></li>
                <li><a href="/login">Student</a></li>
                
              </ul>
            )}
          </div>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
    <Slideshow/>
    <Footer/>

   
    </body>
  );
};