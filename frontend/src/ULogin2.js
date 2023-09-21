import React, { useState } from "react";
import axios from 'axios';
import './login.css';
import { useNavigate } from "react-router-dom";
import Dropdown from "./main";
// import { Slideshows } from "./slider2";

export const Ulogin = () => {
    const nav=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Show=async()=>{
     
    const res=await axios.get("http://localhost:8000/college/"+email+"/"+password)
    {
         if(res.data)
         {
            nav('/main')
         }
         else{
            alert("not found");
         }
    }
}
  
  return (
    <div className="login-container">
       
      <form className="login-form">
      {/* <Dropdown/> */}
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
       
        <button type="button" onClick={Show}>
          Login
        </button>
      </form>
      {/* <Slideshows/> */}
    </div>
  );
};