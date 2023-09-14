import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
// import './home1.css';
const Dropdown = () => {
  const nav=useNavigate();
  
  const [selectedValue, setSelectedValue] = useState('');
const [selectedOption, setSelectedOption] = useState([0]);
  
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
    const selectedLabel = collegeOptions.find(option => option.value === selectedValue).label;
    setSelectedOption({ value: selectedValue, label: selectedLabel });
    sessionStorage.value=selectedValue;
    sessionStorage.label=selectedOption;
    nav("/login");

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
      </select>
      {/* {selectedValue && <p>Selected value: {selectedValue} </p> } */}
      {/* <p>Selected Value: {selectedOption.value}</p>
      <p>Selected Label: {selectedOption.label}</p> */}

    </div>
    </>
  );
};

export default Dropdown;
