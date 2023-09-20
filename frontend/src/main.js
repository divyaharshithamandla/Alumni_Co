import React, { useState } from 'react';
import './mp.css';
import {useNavigate} from 'react-router-dom';
// import './home1.css';
import './mp.css';
const Dropdown = () => {
  const nav=useNavigate();
  
  
  const [selectedValue, setSelectedValue] = useState('');
  const [collegename,setCollegeName]=useState();
  
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
    setCollegeName(event.target.label);
    localStorage.code=selectedValue;
    localStorage.collegename=collegename;
   console.log(localStorage.code);
  };

  return (
    <>
    <div class="center">
      <h1>Select a college</h1>
      <select value={selectedValue} onChange={handleDropdownChange}>
        <option value="">Select a college to connect</option>
        {collegeOptions.map((college) => (
          <option key={college.value} value={college.value}>
            {college.label}
          </option>
        ))}
        <h1>{collegename}</h1>
      </select>
      
    </div>
    </>
  );
};

export default Dropdown;