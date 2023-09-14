import React, { useEffect, useState } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import './login.css'
// import Dropdown from "./main";


export const Login=()=>
{   const nav=useNavigate();
    const [email,setgmail]=useState([]);
    const [password,setpassword]=useState([]);
    const [regno,setregno]=useState([]);
    localStorage.gmail=email;
    const Save=async()=>{
     
        const res=await axios.get("http://localhost:8000/output/"+email+"/"+password+"/"+regno)
        {
             if(res.data)
             {
                setgmail(res.data.email);
                setpassword(res.data.password);
                
             }
             else{
                alert("not found");
             }
        }
    
    }
    return(
    <>
    <table>
        <tr>
        <td>
    <div className="main">
            <input type ="checkbox" id="chk" aria-hidden="true"/>
                <div className="signup">
                    <form>
                        <label for="chk" aria-hidden="true">Alumni</label>
                            <img src="Alumni.jpg" alt="student" />
                    </form>
                </div>
                <div className="login">
                
                    <form>
                    <label for="chk" aria-hidden="true">Login</label>
                    <input type ="regno" name="txt" placeholder="Regno" onChange={(e)=>setregno(e.target.value)} required=""/>
                    <input type ="email" name="txt" placeholder="Email" onChange={(e)=>setgmail(e.target.value)} required=""/>
                            <input type ="password" name="txt" placeholder="Password" onChange={(e)=>setpassword(e.target.value)} required=""/>
                            <button onClick={Login}>login</button>
                    </form>
                    
         </div>
        </div>
        </td>
        <td>
        <div className="main">
            <input type ="checkbox" id="chk1" aria-hidden="true"/>
                <div className="signup">
                    <form>
                        <label for="chk1" aria-hidden="true">Student</label>
                            <img src="student.jpg" alt="student"/>
                    </form>
                </div>
                <div className="login">
                
                    <form>
                    <label for="chk1" aria-hidden="true">Login</label>
                    <input type ="regno" name="txt" placeholder="Regno" onChange={(e)=>setregno(e.target.value)} required=""/>
                    <input type ="email" name="txt" placeholder="Email" onChange={(e)=>setgmail(e.target.value)}  required=""/>
                            <input type ="password" name="txt" placeholder="Password" onChange={(e)=>setpassword(e.target.value)}  required=""/>
                            <button  onClick={Login}>login</button>
                    </form>
                    
         </div>
        </div>
        </td>
        <td>
        <div className="main">
            <input type ="checkbox" id="chk2" aria-hidden="true"/>
                <div className="signup">
                    <form>
                        <label for="chk1" aria-hidden="true">Faculty</label>
                            <img src="student.jpg" alt="student"/>
                    </form>
                </div>
                <div className="login">
                
                    <form>
                    <label for="chk2" aria-hidden="true">Login</label>
                        
                    <input type ="regno" name="txt" placeholder="Regno" onChange={(e)=>setregno(e.target.value)} required=""/>
                    <input type ="email" name="txt" placeholder="Email"  onChange={(e)=>setgmail(e.target.value)} required=""/>
                            <input type ="password" name="txt" placeholder="Password" onChange={(e)=>setpassword(e.target.value)} required=""/>
                            <button  onClick={Save}>login</button>
                    </form>
                    
         </div>
        </div>
        </td>
       </tr>
        </table>
        
    </>
    )
}