import React from "react";
//import './view.css';
 import { useState,useEffect } from "react";
 import { useNavigate } from "react-router-dom";
 import axios from "axios";
const AProfileview=()=>{
    const[data,setData]=useState(['']);
    const code=localStorage.code;
    const gmail=localStorage.Gmail;
    useEffect(()=>{
        axios.get('http://localhost:8000/pview/'+code+"/"+gmail)
        .then((responce)=>{   
            setData(responce.data);
        })
        .catch((err)=>{
            console.log(err);
        })
        
     },[])
   const nav=useNavigate();
   const Update=()=>{
    nav('/')
   }
            

    return(
        <>
        <div className="main-profile">
            {
                data.map((item)=>{ 
                {
                    return(
                        <>
                        <div className="one-part">
                        <img src={"https://beige-hushed-ladybug-166.mypinata.cloud/ipfs/"+item.Profilepic+"?_gl=1*vr7xbo*_ga*NjQ3NjkzMjQyLjE2OTQzMjI5ODE.*_ga_5RMPXG14TE*MTY5NDMyNzQ4OC4yLjEuMTY5NDMzMTQzMC41OS4wLjA"}></img>
                        <h2>{item.Fname}</h2>
                        <h2>{item.Profession}</h2>
                        <button  style={{background:'none',border:'none',marginBottom:'3vh',color:'blue',textAlign:'right'}} onClick={Update}><b >Update profile</b></button><br/>
                         </div>
                         <div className="two-part"> 
                         
                        <h1>Personal information</h1><br/>
                <h2>Full name</h2><p>{item.Fname}{" "}{item.Lname}</p>
                <hr/>
                <h2>Gmail</h2><p>{item.Gmail}</p><hr/>
                <h2>Graduation</h2><p>{item.Gyear}</p>
                <h2>Date of Birth:</h2><p>{item.DOB}</p><hr/>
                <h2>Gender:</h2> <p>{item.Gender}</p><hr/>
                <h2>Address:</h2><p>{item.Address}</p><hr/>
                </div>
                <div className="new">  
                <div className="three-part">
                       <h1>Communication</h1>
                       <img src="in.png" alt=""></img><p>Linkedin</p><p>{item.Link}</p><br/>
                        <img src="git.png" alt=""></img><p>Github</p><p>{item.Git}</p>
                        </div>
                       <div className="fourth-part">
                           <h1>Achievements and skills</h1></div>
                           <h2>Degree Achieved</h2><p>{item.Degree}</p>
                           <h2>Carrier Overview</h2><p>{item.Carrier}</p><br/>
                           <h2>Notable achievements</h2><p>{item.achievements}</p>
                           <h2></h2>
                     </div>
                </>
                    )
                }
            })
        }
        </div>
                       
        </>          
           
                           
                )
           }
export default AProfileview;