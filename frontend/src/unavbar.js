import React, { useEffect, useState } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import { NavLink,useNavigate} from 'react-router-dom';
import Sliders from "./slider";
import './home.css'
import Alumni from "./alumni";
import { Home } from "./home";
import { CgProfile } from "react-icons/cg";
import { Ulogin } from "./ulogin";



export const Unav= () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <NavLink to="/profile">Students</NavLink>
        </li>
        <li>
        <NavLink to="/notify">Notify</NavLink>
      
        </li>
        <li>
          <NavLink to="/slider">Events</NavLink>
        </li>
        <li>
          <NavLink to="/excel">Add Students</NavLink>
        </li>
      </ul>
    </nav>
    
    </body>
  );
};