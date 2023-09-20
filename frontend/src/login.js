import React, { useEffect, useState } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import './login.css';
import Dropdown from "./main";
// import Dropdown from "./main";



export const Login=()=>
{  
    const code=localStorage.code;
    
    
    const nav=useNavigate();
    
    
    
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [regno, setregno] = useState("");
        // let code=localStorage.code;
        
    const Show=async()=>{
        localStorage.Gmail=email;
       try{
        const res=await axios.get("http://localhost:8000/find2/"+code+"/"+email+"/"+regno+"/"+password)
        {
             if(res.data)
             {
                nav('/msn')
             }

             else{
                alert("not found");
             }
        }

    }
    
    catch(e)
    {
        alert("fill the details properly");
    }
    }
    return(
    <>
    <div className="ex">
    <div className="ex1">
        {/* <Dropdown/> */}
    </div>
    <div className="ex2">

        <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="regdno">regd no.</label>
          <input
            type="regdno"
            id="regdno"
            placeholder="Enter your regdno."
            value={regno}
            onChange={(e) => setregno(e.target.value)}
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
    </div>


    

    </div>
    </div>
 </>
  )

}

