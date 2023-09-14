import React, { useState } from 'react';
import './notify.css';
import axios from 'axios';
export const TextAreaWithButtons=()=>{
  // State to store the text entered in the textarea
  const [text, setText] = useState('');
  const[data,setData]=useState([]);
  // Function to handle changes in the textarea
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const value=localStorage.value;
  // Function to handle button clicks
  const handleButtonClick = (buttonId) => {
         axios.get('http://localhost:8000/mail/'+value+buttonId)
         .then((responce)=>{   
             setData(responce.data);
         })
         .catch((err)=>{
             console.log(err);
         })
         {
            data.map((item)=>{ 
                   
                {
                    window.Email.send({
                        SecureToken : "608ad59a-ae2c-495e-b68f-b0d079f7f56e",
                        To : [item.Email],
                        From : "sanjumullu123@gmail.com",
                        Subject : "CO-ALMS",
                        Body : text
                    })
                    .then(
                        message => alert(message)
                      );
                }
            })
        }
    // You can perform actions based on the button clicked here
    console.log(`Button ${buttonId} clicked`);
  };
  const All=()=>{
    axios.get('http://localhost:8000/mails/'+value)
         .then((responce)=>{   
             setData(responce.data);
         })
         .catch((err)=>{
             console.log(err);
         })
         {
            data.map((item)=>{ 
                   
                {
                    window.Email.send({
                        SecureToken : "608ad59a-ae2c-495e-b68f-b0d079f7f56e",
                        To : [item.Email],
                        From : "sanjumullu123@gmail.com",
                        Subject : "CO-ALMS",
                        Body : text
                    })
                    .then(
                        message => alert(message)
                      );
                }
            })
        }
  }

  return (
    <div>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Enter your text here..."
      ></textarea>

      <div className="button-container">
        <button onClick={() => handleButtonClick("student")}>student</button>
        <button onClick={() => handleButtonClick("alumni")}>alumni</button>
        <button onClick={All}>all</button>
      </div>
    </div>
  );
}

// export default TextAreaWithButtons;
