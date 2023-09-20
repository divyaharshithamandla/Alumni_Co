import React, { useState ,useEffect } from "react";
import axios from "axios";
import Avatar from 'react-avatar';
import './chat.css';
const Chat=()=>{
    const[text,settext]=useState("");
    const[user,setuser]=useState("");
    // const gmail=localStorage.email;
    const value=localStorage.value;
    var name="";
    const Send=async()=>{
        setuser("Teja");
        try{
<<<<<<< HEAD
        const res=await axios.get("http://localhost:8000/find/")
        if(res.data)
        {
            // {
            //     <Avatar name={res.data.Fname+" "+res.data.Lname} maxInitials={2}/>
            // }
            setuser("Teja");
        const res1=await axios.post("http://localhost:8000/insert/"+text+"/"+user)
=======
<<<<<<< HEAD
        const res=await axios.get("http://localhost:8000/find/")
        if(res.data)
        {
            {
                <Avatar name={res.data.Fname+" "+res.data.Lname} maxInitials={2}/>
            }
            
        const res1=await axios.post("http://localhost:8000/insert/"+text)
=======
        // const res=await axios.get("http://localhost:6000/find/")
        // if(res.data)
        // {
        //     // {
        //     //     <Avatar name={res.data.Fname+" "+res.data.Lname} maxInitials={2}/>
        //     // }
        //     setuser(res.data.User);
        const res1=await axios.post("http://localhost:6000/insert/"+text+"/"+"student"+"/"+"divyaharshitha7704@gmail.com")
>>>>>>> 76697754af5e530fba8b2b977878e224510f96df
>>>>>>> 46481bbf2b60f8f1917d59c9bed851809dd5cc84
        if(res1.data)
        {
            document.getElementById("text").value="";
            window.location.reload(false);
        }
<<<<<<< HEAD
    }}
=======
<<<<<<< HEAD
    }}
=======
        }
>>>>>>> 76697754af5e530fba8b2b977878e224510f96df
>>>>>>> 46481bbf2b60f8f1917d59c9bed851809dd5cc84
    catch(e)
    {
        console.log(e);
    }
    }
    const[data,setData]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/screen')
        .then((responce)=>{   
            setData(responce.data);
        })
        .catch((err)=>{
            console.log(err);
        })
        
     },[])
    return(
        <>
        <div>
        <div className="screen">
        {
            data.map((item)=>{   
                    if(item.Email=="divyaharshitha7704@gmail.com")
                {
                    return(
                        <>
                            <h5 align="right">{item.Avatar}{" "}{item.User}</h5>
                            <h5 align="right">-{item.Msg}</h5>
                            
                        </>
                    )

                }
                else
                {
                    return(
                        <>
                            <h5 align="left">{item.Avatar}{" "}{item.User}</h5>
                            <h5 align="left">-{item.Msg}</h5>
                            
                        </>
                    )
                }
            
            })
            }
        </div>
       <div><center>  <input type="text" id="text" onChange={(e)=>settext(e.target.value)}></input>
        <button style={{borderRadius:"50px"}} onClick={Send}>send</button></center></div>
        </div>
        </>
    );
}
export default Chat;