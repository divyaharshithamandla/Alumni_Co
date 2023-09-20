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
        const res=await axios.get("http://localhost:8000/find/")
        if(res.data)
        {
            {
                <Avatar name={res.data.Fname+" "+res.data.Lname} maxInitials={2}/>
            }
            
        const res1=await axios.post("http://localhost:8000/insert/"+text)
        if(res1.data)
        {
            document.getElementById("text").value="";
            window.location.reload(false);
        }
    }}
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