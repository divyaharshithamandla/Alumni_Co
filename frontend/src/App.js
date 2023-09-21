<<<<<<< HEAD

import { Home } from "./home";
import { Login } from "./login";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { useState } from "react";
import SearchBar from "./searchbar";
import { Slideshow } from "./slider";
import Dropdown from "./main";
import Alumni from "./alumni";
import Footer from "./footer";
import { Ulogin } from "./ulogin";
import { Unav } from "./unavbar";
import { Anav } from "./anavbar";
import {View1 } from "./render1";
import Sidebar from "./uniMain";
import Aluminiprofile from "./aprofile";
import Studentprofile from "./sprofile";
import Excel from "./excel";
import Chat from "./chat";
import { Slideshows } from "./slider2";
import { TextAreaWithButtons } from "./notify";
import Aluminiprofile2 from "./aprofile";
// import Unewlogin from "./newLogin";
import { Snav } from "./mainstudent";
import Logindd from "./logindd";
import Studentprofile2 from "./studentprofile";
import Sprofiles from "./sprofiles";
import AProfileview from "./Aprofileview";
// import SProfileview from "./Sprofileview";
import { CheckAlumni } from "./checkalumni";
import { CheckStudent } from "./checkStudent";
function App(){
    return(
     <div className="App"> 
        <Router>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/searchbar" element={<SearchBar/>}></Route>
            <Route path="/main" element={<Dropdown/>}></Route>
            <Route path="/alumni" element={<Alumni/>}></Route>
            <Route path="/slider" element={<Slideshow/>}></Route>
            <Route path="/slider2" element={<Slideshows/>}></Route>
           <Route path="/login" element={<Login/>}></Route>
           <Route path="/ulogin" element={<Ulogin/>}></Route>
           <Route path="/unavbar" element={<Unav/>}></Route>
           <Route path="/anavbar" element={<Anav/>}></Route>
           <Route path='/view' element={<View1/>}/>
           <Route path='/side' element={<Sidebar/>}/>
           <Route path='/footer' element={<Footer/>}/>
           <Route path='/aprofile' element={<Aluminiprofile/>}/>
           <Route path='/sprofile' element={<Studentprofile/>}/>
           <Route path="/excel" element={<Excel />}/>
           <Route path="/chat" element={<Chat />}/>
           <Route path="/notify" element={<TextAreaWithButtons />}/>
           <Route path="/msn" element={<Snav />}/>
           <Route path="/logindd" element={<Logindd/>}/>
           <Route path="/viewAlum" element={<Aluminiprofile2 />}/>
           <Route path="/viewStu" element={<Studentprofile2 />}/>
           {/* <Route path="/views" element={<Sprofiles />}/> */}
           {/* <Route path="/views" element={< AProfileview/>}/> */}
           {/* <Route path="/profA" element={< AProfileview/>}/> */}
=======
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { Home } from './home';
import Dropdown from './dropDown';
import { Login } from './login';
import { Ulogin } from './Ulogin';
import { TextAreaWithButtons } from './notify';
import { Anav } from './mainstudent';
import Chat from './chat';
<<<<<<< HEAD
import Excel from './excel';
// import Save from './alumniprofileupdate';
=======
import Exchat from './Exchat';
import { Slideshows } from './slider2';
import Contact from './contact';
import AProfileview from './alumprofileview';
>>>>>>> abfbd9ac73732d982b32e9613df3e936f1608a81
function App() {
  return (
    <div className="App">
<div className="App"> 
        <Router>
          <Routes>
            <Route path="/" element={< Home />}/>
            <Route path="/drop" element={< Dropdown />}/>
            <Route path="/chat" element={<Chat />}/>
            <Route path="/login" element={< Login />}/>
            <Route path="/uloginRend" element={<Ulogin/>}/>
            <Route path="/note" element={< TextAreaWithButtons />}/>
            <Route path="/mainstudent" element={<Anav/>}/>
<<<<<<< HEAD
            <Route path="/exc" element={< Excel />}/>
            {/* <Route path="/alumni" element={<Save/>}/> */}
=======
            <Route path="/chat" element={<Chat/>}/>
            <Route path="/exchat" element={<Exchat/>}/>
            <Route path="/slider2" element={<Slideshows/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/profile" element={<AProfileview/>}/>

            
>>>>>>> abfbd9ac73732d982b32e9613df3e936f1608a81
            {/* <Route path="/slide" element={< Slideshow />}/>
           <Route path="/login" element={<Login/>}></Route> */}
>>>>>>> 76697754af5e530fba8b2b977878e224510f96df
          </Routes>
        </Router>
        </div>
        
      
      ) ;
}
export default App;                             
