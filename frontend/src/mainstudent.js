import React, { useEffect, useState } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import { NavLink,useNavigate} from 'react-router-dom';
import Sliders from "./slider";
import './home.css'
//import Alumni from "./alumni";
import { Home } from "./home";
import { CgProfile } from "react-icons/cg";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsFillChatLeftTextFill } from "react-icons/bs";
export const Anav= () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const Search=()=>{
    document.getElementById("search").style.display="";
  }
  return (
    <body>

    
    <nav>
      
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
      <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/chat"><BsFillChatLeftTextFill/></NavLink>
        </li>
        <li>

<NavLink onClick={Search}><BiSearchAlt2/></NavLink>

</li>
        <li>
        <NavLink to="/profile"><CgProfile/></NavLink>
      
        </li>
        <li>
          <NavLink to="/hire">Hire</NavLink>
        </li>
        <li>
          <NavLink to="/services">Events</NavLink>
        </li>
        {/* <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li> */}
      </ul>
    </nav>
    <div>
        {/* <Alumni/> */}
    </div>
    </body>
  );
};