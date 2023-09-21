import React, { useState ,useEffect } from "react";
import axios from "axios";
import Avatar from 'react-avatar';
const Chat=()=>{
    const[text,settext]=useState("");
    const[user,setuser]=useState("");
    const gmail=localStorage.email;
    const code=localStorage.code;
    var name="";
    const Send=async()=>{
        try{
        const res=await axios.get("http://localhost:8000/find")
        if(res.data)
        {
            {
                <Avatar name={res.data.Fname+" "+res.data.Lname} maxInitials={2}/>
            }
            setuser(res.data.User);
        const res1=await axios.post("http://localhost:8000/insert/"+name+"/"+text+"/"+user+"/"+gmail)
        if(res1.data)
        {
            document.getElementById("text").value="";
            window.location.reload(false);
        }
        }
    }
    catch(e)
    {
        console.log(e);
    }
    }
    const[data,setData]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:6000/screen')
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
                    if(item.Email==gmail)
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
        <div > <input type="text" id="text" onChange={(e)=>settext(e.target.value)}></input>
        <button style={{borderRadius:"50px"}} onClick={Send}>send</button></div>
        </div>
        </>
    );
}
export default Chat;