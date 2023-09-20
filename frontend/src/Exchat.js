import React from 'react';
import './chat.css';
const Exchat = () => {
  return (
    <div className="container">
      <div className="content">
        {/* The content above the text area */}
      </div>
      <div className="footer">
        <textarea
          className="text-area"
          placeholder="Enter your text here..."
        ></textarea>
        <button className="submit-button">Submit</button>
      </div>
    </div>
  );
};

export default Exchat;
