// import React from "react";
// //import './view.css';
// import { useNavigate } from "react-router-dom";
// import { useState,useEffect } from "react"
// // import { NavLink } from "react-router-dom";
// import axios from "axios";

// // import { CiFacebook } from "react-icons/ci";
// // import {AiOutlineInstagram} from "react-icons/ai"

// const SProfileview=()=>{
//     const[data,setData]=useState([]);
//     const code=localStorage.code;
//     useEffect(()=>{
//         axios.get('http://localhost:8000/pview'+code)
//         .then((responce)=>{   
//             setData(responce.data);
//         })
//         .catch((err)=>{
//             console.log(err);
//         })
        
//      },[])
    
// const nav=useNavigate()
// const Update=()=>{
//     nav('/spro')
// }
//     return(
//    <>
//         <div className="main-profile">
//         {
//                 data.map((item)=>{ 
//                 {
//                     return(
//                     <>
//             <div className="one-part">
//                 <center><img src="profile.jpg" alt=""></img>
//                 <h1></h1>
            
//             <h2>Current pursuing:</h2><p>{item.cyear}</p>
//             {/* <h1><label>Education</label></h1> */}
//             <button  style={{background:'none',border:'none',marginBottom:'3vh',color:'black',textAlign:'right'}} onClick={Update}><b >Update profile</b></button><br/>
//             </center>
//             </div>
//             <div className="two-part">
//             {/* <h1>Achievements</h1> */}
//                 <h1>Personal information</h1><br/>
//                 <h2>Full name</h2><p>{item.Fname}{" "}{item.Sname}</p>
//                 <hr/>
//                 <h2>Gmail</h2><p>{item.Gmail}</p><hr/>
//                 <h2>Date of Birth:</h2>{item.DOB}<hr/>
//                 <h2>Gender:</h2> <p>{item.Gender}</p><hr/>
//                 <h2>address:</h2><p>{item.Address}</p><hr/>
//                 {/* <h2>Basic Information</h2><br/> */}
//             </div>
//             </>
//                     )
//                 }
//             })
//         }
//         </div>
            
            
//         <div className="new">
//                         <>

            
//         <div className="three-part">
//             <h1>Communication</h1>
//             <img src="in.png" alt=""></img><p>Linkedin</p><p>{item.Link}</p><br/>
//              <img src="git.png" alt=""></img><p>Github</p><p>{item.Git}</p>
//              </div>
//             <div className="fourth-part">
//                 <h1>Achievements and skills</h1></div>
//                 {/* <h2>Area interested</h2><p>{item.Field}</p> */}
//                 {/* <h2>achievements</h2><p>{item.Achievements}</p> */}
//                 </>
    
        
//         </div>
//         </>
    

                
//      )
// }
// export default SProfileview;