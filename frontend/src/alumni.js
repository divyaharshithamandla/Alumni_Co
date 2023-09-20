import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
// import './home1.css';
import './mp.css';
// import SearchBar from './searchbar';

const Alumni = () => {
  const nav=useNavigate();
  
  const [selectedValue, setSelectedValue] = useState('');

  
  const collegeOptions = [
    { label: 'Jntugv', value: 'c-123' },
    { label: 'Jntuk', value: 'c-456' },
    { label: 'Jntuh', value: 'c-789' },
    { label: 'JntuA', value: 'n-8797' },
    { label: 'Andhra University', value: 'c-1123' },
    { label: 'IIIT-Chennai', value: 'b-12345' },
    { label: 'IIIT-Nuzividu', value: 'b-6337' },
    { label: 'GVP', value: 'n-172521' },
    
  ];

  
  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
    // nav('/')
  };

  return (
    <>
    <div class="center">
        {/* <div>
            
            <SearchBar/>
    </div> */}

      <h1>Select a college</h1>
      <select value={selectedValue} onChange={handleDropdownChange}>
        <option value="">Select a college to connect</option>
        {collegeOptions.map((college) => (
          <option key={college.value} value={college.value}>
            {college.label}
          </option>
        ))}
       
      </select>
     
    </div>
   
    
    </>
  );
};

export default Alumni;