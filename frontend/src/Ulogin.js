
// import React, { useEffect, useState } from "react";
// import axios from 'axios';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import './profile2.css';

// export const Ulogin = () => {
//     const nav = useNavigate();

//     const [email, setEmail] = useState(""); // Initialize with an empty string
//     const [regno, setRegno] = useState(""); // Initialize with an empty string

//     const Show = async () => {
//         try {
//             const res = await axios.get(`http://localhost:8000/college/${email}`);
//             if (res.data) {
//                 alert("User found");
//                 nav('/unavbar');
//             } else {
//                 alert("User not found");
//             }
//         } catch (error) {
//             console.error("Error:", error);
//         }
//     }

//     return (
//         <>
//             <div align="center">
//                 <table>
//                     <tr>
//                         <td><label>Gmail</label></td>
//                         <td><input type="gmail" onChange={(e) => setEmail(e.target.value)} value={email} /></td>
//                     </tr><br />
//                     <tr>
//                         <td><label>Regno</label></td>
//                         <td><input type="text" onChange={(e) => setRegno(e.target.value)} value={regno} /></td>
//                     </tr><br />
//                     <button onClick={Show}>Submit</button>
//                 </table>
//             </div>
//         </>
//     )
// }

// Login.js

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
     try{
    const res=await axios.get("http://localhost:8000/college/"+email+"/"+password)
    {
         if(res.data)
         {
            nav('/unavbar');
         }
         else{
            alert("not found");
         }
    }
}
catch(e)
{
    alert("sjhdhsgd");
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
            placeholder="Enter your email"
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


