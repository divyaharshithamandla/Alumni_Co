// import React, { useState } from 'react';
// import './notify.css';
// import axios from 'axios';
// export const TextAreaWithButtons=()=>{
//   // State to store the text entered in the textarea
//   const [text, setText] = useState('');
//   const[data,setData]=useState([]);
//   // Function to handle changes in the textarea
//   const handleTextChange = (e) => {
//     setText(e.target.value);
//   };
//   const value=localStorage.value;
//   // Function to handle button clicks
//   const handleButtonClick = (buttonId) => {
//          axios.get('http://localhost:8000/mail/'+buttonId)
//          .then((responce)=>{   
//              setData(responce.data);
//          })
//          .catch((err)=>{
//              console.log(err);
//          })
//          {
//             data.map((item)=>{ 
                   
//                 {
//                     window.Email.send({
//                         SecureToken : "608ad59a-ae2c-495e-b68f-b0d079f7f56e",
//                         To : [item.Email],
//                         From : "sanjumullu123@gmail.com",
//                         Subject : "CO-ALMS",
//                         Body : text
//                     })
//                     .then(
//                         message => alert(message)
//                       );
//                 }
//             })
//         }
//     // You can perform actions based on the button clicked here
//     console.log(`Button ${buttonId} clicked`);
//   };
//   const All=()=>{
//     axios.get('http://localhost:8000/mails')
//          .then((responce)=>{   
//              setData(responce.data);
//          })
//          .catch((err)=>{
//              console.log(err);
//          })
//          {
//             data.map((item)=>{ 
                   
//                 {
//                     window.Email.send({
//                         SecureToken : "608ad59a-ae2c-495e-b68f-b0d079f7f56e",
//                         To : [item.Email],
//                         From : "sanjumullu123@gmail.com",
//                         Subject : "CO-ALMS",
//                         Body : text
//                     })
//                     .then(
//                         message => alert(message)
//                       );
//                 }
//             })
//         }
//   }

//   return (
//     <div>
//       <textarea
//         value={text}
//         onChange={handleTextChange}
//         placeholder="Enter your text here..."
//       ></textarea>

//       <div className="button-container">
//         <button onClick={() => handleButtonClick("student")}>student</button>
//         <button onClick={() => handleButtonClick("alumni")}>alumni</button>
//         <button onClick={All}>all</button>
//       </div>
//     </div>
//   );
// }

// // export default TextAreaWithButtons;
import React, { useState } from 'react';
import './notify.css';
import axios from 'axios';
<<<<<<< HEAD

export const TextAreaWithButtons = () => {
=======
export const TextAreaWithButtons=()=>{
  const [message,setMessage]=useState(''); 
  // State to store the text entered in the textarea
>>>>>>> 46481bbf2b60f8f1917d59c9bed851809dd5cc84
  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };
<<<<<<< HEAD

  const sendEmails = (recipients) => {
    recipients.forEach((item) => {
      window.Email.send({
        SecureToken: "608ad59a-ae2c-495e-b68f-b0d079f7f56e",
        To: [item.Email],
        From: "sanjumullu123@gmail.com",
        Subject: "CO-ALMS",
        Body: text,
      })
        .then((message) => console.log("Email sent:", message))
        .catch((error) => console.error("Error sending email:", error));
    });
  };

  const handleButtonClick = (recipients) => {
    axios
      .get(`http://localhost:8000/mail/${recipients}`)
      .then((response) => {
        setData(response.data);
        sendEmails(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAllButtonClick = () => {
    axios
      .get('http://localhost:8000/mails')
      .then((response) => {
        setData(response.data);
        sendEmails(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
=======
  // const value=localStorage.value;
  // Function to handle button clicks
  const handleButtonClick = (buttonId) => {
<<<<<<< HEAD

         axios.get('http://localhost:8000/mail/'+buttonId)
=======
         axios.get('http://localhost:6000/mail/'+buttonId)
>>>>>>> 76697754af5e530fba8b2b977878e224510f96df
         .then((responce)=>{   
             setData(responce.data);
             {
              data.map((item)=>{ 
                     
                  {
                      window.Email.send({
                          SecureToken : "608ad59a-ae2c-495e-b68f-b0d079f7f56e",
                          To : [item.Gmail],
                          From : "sanjumullu123@gmail.com",
                          Subject : "CO-ALMS",
                          Body : text
                      })
                      .then(
                          // message => alert(message)
                          setMessage("sent")
                        );
                  }
              })
          }
         })
         .catch((err)=>{
             console.log(err);
         })
        
    // You can perform actions based on the button clicked here
    console.log(`Button ${buttonId} clicked`);
  };
  const All=()=>{
<<<<<<< HEAD
    axios.get('http://localhost:8000/mails')
=======
    axios.get('http://localhost:6000/mails')
>>>>>>> 76697754af5e530fba8b2b977878e224510f96df
         .then((responce)=>{   
             setData(responce.data);
             {
              data.map((item)=>{ 
                     
                  {
                      window.Email.send({
                          SecureToken : "608ad59a-ae2c-495e-b68f-b0d079f7f56e",
                          To : [item.Gmail],
                          From : "sanjumullu123@gmail.com",
                          Subject : "CO-ALMS",
                          Body : text
                      })
                      // .then(
                      //     message => alert(message)
                      //   );
                      .then(
                        // message => alert(message)
                        setMessage("sent")
                      );
                  }
              })
          }
         })
         .catch((err)=>{
             console.log(err);
         })
         
  }
>>>>>>> 46481bbf2b60f8f1917d59c9bed851809dd5cc84

  return (
    <div>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Enter your text here..."
      ></textarea>

      <div className="button-container">
<<<<<<< HEAD
        <button onClick={() => handleButtonClick("student")}>Send to Students</button>
        <button onClick={() => handleButtonClick("alumni")}>Send to Alumni</button>
        <button onClick={handleAllButtonClick}>Send to All</button>
=======
        <button onClick={() => handleButtonClick("student")}>student</button>
        <button onClick={() => handleButtonClick("alumni")}>alumni</button>
        <button onClick={All}>all</button><br/>
       
>>>>>>> 46481bbf2b60f8f1917d59c9bed851809dd5cc84
      </div>
    </div>
  );
};

<<<<<<< HEAD
=======
export default TextAreaWithButtons;
// import React, { useState } from 'react';
// import './notify.css';
// import axios from 'axios';

// export const TextAreaWithButtons = () => {
//   const [text, setText] = useState('');
//   const [data, setData] = useState([]);

//   const handleTextChange = (e) => {
//     setText(e.target.value);
//   };

//   const sendEmails = (recipients) => {
//     recipients.forEach((item) => {
//       window.Email.send({
//         SecureToken: "608ad59a-ae2c-495e-b68f-b0d079f7f56e",
//         To: [item.Email],
//         From: "sanjumullu123@gmail.com",
//         Subject: "CO-ALMS",
//         Body: text,
//       })
//         .then((message) => console.log("Email sent:", message))
//         .catch((error) => console.error("Error sending email:", error));
//     });
//   };

//   const handleButtonClick = (recipients) => {
//     axios
//       .get(`http://localhost:8000/mail/${recipients}`)
//       .then((response) => {
//         setData(response.data);
//         sendEmails(response.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const handleAllButtonClick = () => {
//     axios
//       .get('http://localhost:8000/mails')
//       .then((response) => {
//         setData(response.data);
//         sendEmails(response.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <div>
//       <textarea
//         value={text}
//         onChange={handleTextChange}
//         placeholder="Enter your text here..."
//       ></textarea>

//       <div className="button-container">
//         <button onClick={() => handleButtonClick("student")}>Send to Students</button>
//         <button onClick={() => handleButtonClick("alumni")}>Send to Alumni</button>
//         <button onClick={handleAllButtonClick}>Send to All</button>
//       </div>
//     </div>
//   );
// };

>>>>>>> 46481bbf2b60f8f1917d59c9bed851809dd5cc84
