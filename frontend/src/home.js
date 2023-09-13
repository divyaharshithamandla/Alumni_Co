import React, { useEffect, useState } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import { NavLink,useNavigate} from 'react-router-dom';
import { Slideshow } from "./slider";
import './home.css'





export const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <body>

    
    <nav>
      <Link to="/" className="title">
      CO-ALMS
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/college">College</NavLink>
        </li>
        <li>
          <NavLink to="/drop">Login</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
   <div>
    <Slideshow/>
   </div>
    </body>
  );
};