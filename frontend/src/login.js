import React, { useEffect, useState } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import './login.css'
export const Login=()=>
{  

    const nav=useNavigate();
    {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [regno, setregno] = useState("");
        const[college,setcollege]=useState("");
        localStorage.college=college;
    const Show=async()=>{
      localStorage.Gmail=email;
        const res=await axios.get("http://localhost:8000/find/"+email+"/"+regno+"/"+password)
        {
             if(res.data)
             {
              setcollege(res.data.College);
                // nav('/main')
                alert("success"); 
            }
             else{
                alert("not found");
             }
        }
    }
    return(
    <>
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
 </>
    )
    }
}