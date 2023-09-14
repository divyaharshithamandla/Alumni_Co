import React, { useState } from 'react';
import './notify.css';
export const TextAreaWithButtons=()=>{
  // State to store the text entered in the textarea
  const [text, setText] = useState('');

  // Function to handle changes in the textarea
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  // Function to handle button clicks
  const handleButtonClick = (buttonId) => {
    // You can perform actions based on the button clicked here
    console.log(`Button ${buttonId} clicked`);
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Enter your text here..."
      ></textarea>

      <div className="button-container">
        <button onClick={() => handleButtonClick(1)}>student</button>
        <button onClick={() => handleButtonClick(2)}>alumni</button>
        <button onClick={() => handleButtonClick(3)}>all</button>
      </div>
    </div>
  );
}

// export default TextAreaWithButtons;
