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
import Excel from './excel';
// import Save from './alumniprofileupdate';
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
            <Route path="/exc" element={< Excel />}/>
            {/* <Route path="/alumni" element={<Save/>}/> */}
            {/* <Route path="/slide" element={< Slideshow />}/>
           <Route path="/login" element={<Login/>}></Route> */}
          </Routes>
        </Router>
        </div>
    </div>
  );
}

export default App;
