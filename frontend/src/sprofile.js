import React from "react";
import { useState } from "react";
import './profile2.css';
import { useNavigate } from "react-router-dom";

const Studentprofile=()=>{
    // const [adno,setAdno]=useState([]);
    // const[rno,setRno]=useState([]);
    const [fname,setFname]=useState([]);
    const [sname,setSname]=useState([]);
    
   const  [dob,setDob]=useState([]);
   const [gender,setGender]=useState([]);
   const [age,setAge]=useState([]);
    const [gmail,setGmail]=useState([]);
    const [cyear,setCyear]=useState([]);
    const [achieve,setAchieve]=useState([]);
    const [field,setField]=useState([]);
    const [address,setAddress]=useState([]);
    const nav=useNavigate();
    // const Update=()=>{
    //     nav('/spro')

    // }
    

    return(
        <>
        <center>
        <div className="user-profile-form">
      <h1>Student Profile Form</h1>
      {/* <div className="form-group">   
        <label> <b>Admn no:: </b><input type="text" placeholder="enter admission number" onChange={(e)=>setAdno(e.target.value)}></input></label></div>
        <div className="form-group">   
        <label> <b>Reg no:: </b><input type="text" placeholder="enter registration number" onChange={(e)=>setRno(e.target.value)}></input></label></div> */}
      <div className="form-group">   
        <label> <b>First Name:: </b><input type="text" placeholder="enter first name" onChange={(e)=>setFname(e.target.value)}></input></label></div>
        <div className="form-group">
        <label> <b>Last Name:: </b><input type="text" placeholder="enter Last name" onChange={(e)=>setSname(e.target.value)}></input></label></div>
        <div className="form-group">
        <label> <b>Date of Birth:: </b><input type="date" placeholder="enter date of birth" onChange={(e)=>setDob(e.target.value)}></input></label></div>
         <div className="form-group">
        <label> <b>Gender::</b><input type="text" placeholder="" onChange={(e)=>setGender(e.target.value)}></input></label></div> 
         <div className="form-group">
        <label> <b>Age:: </b><input type="number" placeholder="enter your age" onChange={(e)=>setAge(e.target.value)}></input></label></div> 
        <div className="form-group">
        <label> <b>Gmail:: </b><input type="text" placeholder="enter gmail" onChange={(e)=>setGmail(e.target.value)}></input></label></div>
        <div className="form-group">
        <label> <b>Current pursuing:: </b><input type="text" placeholder="branch and the year" onChange={(e)=>setCyear(e.target.value)}></input></label></div>
        <div className="form-group">
        <label> <b> Achievements:: </b><input type="text" placeholder="any achievements" onChange={(e)=>setAchieve(e.target.value)}></input></label></div>
        
        {/* <div className="form-group"> */}
        <label> <b>Area interested:: </b><input type="radio" name="field" value="Software" onChange={(e)=>setField(e.target.value)}></input>Software<input type="radio" name="field" value="Software" onChange={(e)=>setField(e.target.value)}></input>Hardware</label>
        <div className="form-group">
        <label> <b>Address:: </b><input type="textarea"  placeholder="" onChange={(e)=>setAddress(e.target.value)}></input></label></div>
        {/* <div className="form-group">
        <label> <b>Notable Achievements:: </b><input type="textarea" placeholder="" onChange={(e)=>setAchievements(e.target.value)}></input></label></div>*/}
        <div className="bt1"> 
        <button type="image"> image-upload</button></div>
        <div className="bt2">
        <button type="file">Resume-upload</button>
        </div><br/><br/><br/>
        {/* <button  style={{background:'none',border:'none',marginBottom:'3vh',color:'black',textAlign:'right'}} onClick={Update}><b >Update profile</b></button><br/> */}
        <div className="neon-button">

        <button type="submit">Submit</button>
        </div>
        </div>
        </center>
        
        </>

    )
}

export default Studentprofile;
