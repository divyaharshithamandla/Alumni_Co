import React, { useEffect, useState } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import './login.css'
import Dropdown from "./main";

export const View1=()=>{
    const nav= useNavigate();
    const fun=()=>{
        nav('/login')
    }
    return(
        <>
        <div>
                <Dropdown/>
        </div>
   <div>
    <button onClick={fun}>submit</button>
    </div>
    </>
    )
}