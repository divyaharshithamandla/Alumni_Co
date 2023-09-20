import React from "react";
import { useState } from "react";
//import './profile.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

<<<<<<< HEAD
const Studentprofile=()=>{
=======
const Studentprofile2=()=>{
>>>>>>> 46481bbf2b60f8f1917d59c9bed851809dd5cc84
    // const [adno,setAdno]=useState([]);
    // const[rno,setRno]=useState([]);
    const code=localStorage.code;
    const collegename=localStorage.collegename;
    const [fname,setFname]=useState("");
    const [lname,setSname]=useState("");
   const  [dob,setDob]=useState("");
   const [gender,setGender]=useState("");
   const [age,setAge]=useState("");
    const [gmail,setGmail]=useState("");
    const[git,setGit]=useState("");
    const[link,setLink]=useState("");
    const [gyear,setGyear]=useState("");
    const [achieve,setAchieve]=useState("");
    const [field,setField]=useState("");
    const [address,setAddress]=useState("");
    const[profilepic,setProfilepic]=useState("");
    const[resume,setResume]=useState("")
    const [file,setFile]=useState("");
    const formData = new FormData("");
    formData.append('file', file); 
    const Save=async()=>{
       
<<<<<<< HEAD
      const res=await axios.post("http://localhost:8000/profile1/"+code+"/"+collegename+"/"+fname+"/"+lname+"/"+dob+"/"+gender+"/"+age+"/"+gmail+"/"+git+"/"+link+"/"+gyear+"/"+achieve+"/"+field+"/"+address+"/"+profilepic+"/"+resume)
=======
      const res=await axios.post("http://localhost:8000/Sprofile/"+fname+"/"+lname+"/"+dob+"/"+gender+"/"+age+"/"+gmail+"/"+git+"/"+link+"/"+gyear+"/"+achieve+"/"+field+"/"+address+"/"+profilepic+"/"+resume)
>>>>>>> 46481bbf2b60f8f1917d59c9bed851809dd5cc84
      if(res.data)
      {
        alert("Submitted Successfully");
      }
    }
    const handleFileChange = async(event) => {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);
      const ipfsResponse = await axios.post(
         
        'https://api.pinata.cloud/pinning/pinFileToIPFS',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            pinata_api_key: '4f93570c3d31076b67b0',
            pinata_secret_api_key: '2fc6dfc58b57587009d84c6e3564047fb409cb7420d7f04bf08af395044cdfdf',
          },
        }
      );
      setProfilepic(ipfsResponse.data.IpfsHash);
    }
    const handleFileChange1 = async(event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
        const ipfsResponse1 = await axios.post(
           
          'https://api.pinata.cloud/pinning/pinFileToIPFS',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              pinata_api_key: '4f93570c3d31076b67b0',
              pinata_secret_api_key: '2fc6dfc58b57587009d84c6e3564047fb409cb7420d7f04bf08af395044cdfdf',
            },
          }
        );
        setResume(ipfsResponse1.data.IpfsHash);
      }

    return(
        <>
        <center>
<<<<<<< HEAD
        <div className="user-profile-form">
      <h1>Student Profile Form</h1>
      {/* <div className="form-group">   
        <label> <b>Admn no:: </b><input type="text" placeholder="enter admission number" onChange={(e)=>setAdno(e.target.value)}></input></label></div>
        <div className="form-group">   
        <label> <b>Reg no:: </b><input type="text" placeholder="enter registration number" onChange={(e)=>setRno(e.target.value)}></input></label></div> */}
      <div className="form-group">   
        <label> <b>First Name:: </b><input type="text" placeholder="enter first name" onChange={(e)=>setFname(e.target.value)}></input></label></div>
        <div className="form-group">
        <label> <b>Second Name:: </b><input type="text" placeholder="enter Second name" onChange={(e)=>setSname(e.target.value)}></input></label></div>
        <div className="form-group">
        <label> <b>Date of Birth:: </b><input type="date" placeholder="enter date of birth" onChange={(e)=>setDob(e.target.value)}></input></label></div>
         <div className="form-group">
        <label> <b>Gender::</b><input type="text" placeholder="" onChange={(e)=>setGender(e.target.value)}></input></label></div> 
         <div className="form-group">
        <label> <b>Age:: </b><input type="number" placeholder="enter your age" onChange={(e)=>setAge(e.target.value)}></input></label></div> 
        <div className="form-group">
=======
        <div >
      <h1>Student Profile Form</h1>
      {/* <div >   
        <label> <b>Admn no:: </b><input type="text" placeholder="enter admission number" onChange={(e)=>setAdno(e.target.value)}></input></label></div>
        <div >   
        <label> <b>Reg no:: </b><input type="text" placeholder="enter registration number" onChange={(e)=>setRno(e.target.value)}></input></label></div> */}
      <div >   
        <label> <b>First Name:: </b><input type="text" placeholder="enter first name" onChange={(e)=>setFname(e.target.value)}></input></label></div>
        <div >
        <label> <b>Last Name:: </b><input type="text" placeholder="enter Last name" onChange={(e)=>setSname(e.target.value)}></input></label></div>
        <div  >
        <label> <b>Date of Birth:: </b><input type="date" placeholder="enter date of birth" onChange={(e)=>setDob(e.target.value)}></input></label></div>
         <div >
        <label> <b>Gender::</b><input type="text" placeholder="" onChange={(e)=>setGender(e.target.value)}></input></label></div> 
         <div >
        <label> <b>Age:: </b><input type="number" placeholder="enter your age" onChange={(e)=>setAge(e.target.value)}></input></label></div> 
        <div>
>>>>>>> 46481bbf2b60f8f1917d59c9bed851809dd5cc84
        <label> <b>Gmail:: </b><input type="text" placeholder="enter gmail" onChange={(e)=>setGmail(e.target.value)}></input></label></div>
        <div className="url">
        <label> <b>Git-hub </b><input type="url" placeholder="url" onChange={(e)=>setGit(e.target.value)}></input></label>
        <label> <b>Linkedin</b><input type="url" placeholder="url" onChange={(e)=>setLink(e.target.value)}></input></label></div>
<<<<<<< HEAD
        <div className="form-group">
        <label> <b>Current pursuing:: </b><input type="text" placeholder="branch and the year" onChange={(e)=>setGyear(e.target.value)}></input></label></div>
        <div className="form-group">
=======
        <div >
        <label> <b>Current pursuing:: </b><input type="text" placeholder="branch and the year" onChange={(e)=>setGyear(e.target.value)}></input></label></div>
        <div>
>>>>>>> 46481bbf2b60f8f1917d59c9bed851809dd5cc84
        <label> <b> Achievements:: </b><input type="text" placeholder="any achievements" onChange={(e)=>setAchieve(e.target.value)}></input></label></div>
        
        {/* <div className="form-group"> */}
        <label> <b>Area interested:: </b><input type="radio" name="field" value="Software" onChange={(e)=>setField(e.target.value)}></input>Software<input type="radio" name="field" value="Software" onChange={(e)=>setField(e.target.value)}></input>Hardware</label>
<<<<<<< HEAD
        <div className="form-group">
=======
        <div >
>>>>>>> 46481bbf2b60f8f1917d59c9bed851809dd5cc84
        <label> <b>Address:: </b><input type="textarea"  placeholder="" onChange={(e)=>setAddress(e.target.value)}></input></label></div>
        {/* <div className="form-group">
        <label> <b>Notable Achievements:: </b><input type="textarea" placeholder="" onChange={(e)=>setAchievements(e.target.value)}></input></label></div>*/}
        <div className="bt1"> 
<<<<<<< HEAD
        <button type="file" onChange={handleFileChange}> image-upload</button></div>
        <div className="bt2">
        <button type="file" onChange={handleFileChange1}>Resume-upload</button>
=======
        <input type="file" onChange={handleFileChange}> image-upload</input></div>
        <div className="bt2">
        <input type="file" onChange={handleFileChange1}>Resume-upload</input>
>>>>>>> 46481bbf2b60f8f1917d59c9bed851809dd5cc84
        </div><br/><br/><br/>
        {/* <button  style={{background:'none',border:'none',marginBottom:'3vh',color:'black',textAlign:'right'}} onClick={Update}><b >Update profile</b></button><br/> */}
        <div className="neon-button">

        <button type="submit" onClick={Save}>Submit</button>
        </div>
        </div>
        </center>
        
        </>

    )
}

<<<<<<< HEAD
export default Studentprofile;
=======
export default Studentprofile2;























>>>>>>> 46481bbf2b60f8f1917d59c9bed851809dd5cc84
