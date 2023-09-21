import React from "react";
import { useNavigate } from "react-router-dom";
const Check=async()=>{
    const nav=useNavigate();
    const res=await axios.get("http://localhost:8000/find/"+code+"/"+email)
    {
         if(res.data.NotableAchievements)
         {
             nav('/sprofileview')
            
         }
         else{
            nav("/sprofile")
         }
    }
}