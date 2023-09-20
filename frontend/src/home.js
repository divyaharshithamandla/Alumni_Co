import React, { useEffect, useState } from "react";
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BiSearchAlt2 } from "react-icons/bi";
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import { NavLink,useNavigate} from 'react-router-dom';
import { Slideshow } from "./slider";
<<<<<<< HEAD
// import './home.css'
=======
<<<<<<< HEAD
import './home.css';
import Searchbar from "./searchbar";
import { CgCommunity } from "react-icons/cg";
import Footer from "./footer";
=======
import './home.css'
>>>>>>> 46481bbf2b60f8f1917d59c9bed851809dd5cc84





>>>>>>> 76697754af5e530fba8b2b977878e224510f96df
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
<<<<<<< HEAD
          <NavLink to="/search"><BiSearchAlt2 /></NavLink>
        </li>
        <li>
          <NavLink to="/ulogin">Uni_login</NavLink>
=======
          <NavLink to="/college">College</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
>>>>>>> 76697754af5e530fba8b2b977878e224510f96df
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