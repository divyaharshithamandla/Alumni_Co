import React from "react";
import { useState } from "react";
import './profile.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Aluminiprofileview=()=>{
    const [fname,setFname]=useState([]);
    const [sname,setSname]=useState([]);
    const  [dob,setDob]=useState([]);
   const [gender,setGender]=useState([]);
   const [age,setAge]=useState([]);
    const [gmail,setGmail]=useState([]);
    const [gyear,setGyear]=useState([]);
    const [degree,setDegree]=useState([]);
    const [prof,setProf]=useState([]);
    const [field,setField]=useState([]);
    const [carrier,setCarrier]=useState([]);
    const [git,setGit]=useState([]);
    const [link,setLink]=useState([]);
    const [achievements,setAchievements]=useState([]);
    const [add,setAdd]=useState([]);
    const [file,setFile] = useState(null);
    const Save=async()=>{
      const formData = new FormData();
      formData.append('file', file);
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
        const profilepic = ipfsResponse.data.IpfsHash;
      const res=await axios.post("http://localhost:8000/profile1/"+fname+"/"+sname+"/"+dob+"/"+gender+"/"+age+"/"+gmail+"/"+gyear+"/"+degree+"/"+prof+"/"+field+"/"+carrier+"/"+git+"/"+link+"/"+achievements+"/"+add+"/"+profilepic)
      if(res.data)
      {
        alert("Submitted Successfully");
      }
    }
    const handleFileChange = (event) => {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);
    };
    return(
        <>
        <center>
        <div className="user-profile-form">
      <h1>Alumini Profile Form</h1>
      <div className="form-group">   
        <label> <b>First Name </b><input type="text" placeholder="enter first name" onChange={(e)=>setFname(e.target.value)}></input></label></div>
        <div className="form-group">
        <label> <b>Last Name </b><input type="text" placeholder="enter last name" onChange={(e)=>setSname(e.target.value)}></input></label></div>
        <div className="form-group">
        <label> <b>Date of Birth </b><input type="date" placeholder="enter date of birth" onChange={(e)=>setDob(e.target.value)}></input></label></div>
         <div className="form-group">
        <label> <b>Gender</b><input type="text" placeholder="" onChange={(e)=>setGender(e.target.value)}></input></label></div> 
         <div className="form-group">
        <label> <b>Age </b><input type="number" placeholder="enter your age" onChange={(e)=>setAge(e.target.value)}></input></label></div> 
        <div className="form-group">
        <label> <b>Gmail</b><input type="text" placeholder="enter gmail" onChange={(e)=>setGmail(e.target.value)}></input></label></div>
        <div className="form-group">
        <label> <b>Graduation Year </b><input type="text" placeholder="enter The year" onChange={(e)=>setGyear(e.target.value)}></input></label></div>
        <div className="form-group">
        <label> <b>Degree Achieved </b><input type="text" placeholder="Degree achievement" onChange={(e)=>setDegree(e.target.value)}></input></label></div>
        <div className="form-group">
        <label> <b>Profession</b><input type="text" placeholder="Degree achievement" onChange={(e)=>setProf(e.target.value)}></input></label></div>
        <div className="form-group">
        <label> <b>Job status </b><input type="radio" name="field" value="Software" onChange={(e)=>setField(e.target.value)}></input>Seeker<input type="radio" name="field" value="Software" onChange={(e)=>setField(e.target.value)}></input>Hirer</label>
        <label> <b>Carrier Overview</b><input type="text" placeholder="" onChange={(e)=>setCarrier(e.target.value)}></input></label></div>
        <div className="url">
        <label> <b>Git-hub </b><input type="url" placeholder="url" onChange={(e)=>setGit(e.target.value)}></input></label>
        <label> <b>Linkedin</b><input type="url" placeholder="url" onChange={(e)=>setLink(e.target.value)}></input></label></div>
        <div className="form-group">
        <label> <b>Notable Achievements </b><input type="text" placeholder="" onChange={(e)=>setAchievements(e.target.value)}></input></label></div>
        <div className="form-group">
        <label> <b>Address </b><input type="textarea"  placeholder="" onChange={(e)=>setAdd(e.target.value)}></input></label></div>
        <div className="display-flux">
        <div className="image"> 
        <label > <b>Profile upload: </b></label></div>
        <div className="i1">
        <input  type="file" onChange={handleFileChange} /></div></div>
        <br/>
        {/* <button  style={{background:'none',border:'none',marginBottom:'3vh',color:'black',textAlign:'right'}} onClick={Update}><b >Update profile</b></button><br/> */}
        <button type="submit" onClick={Save}>Submit</button>
        </div>
        </center>
        </>

    )
}

export default Aluminiprofileview;
