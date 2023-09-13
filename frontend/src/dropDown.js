import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
// import './home1.css';
const Dropdown = () => {
  const nav=useNavigate();
  
  const [selectedValue, setSelectedValue] = useState('');
const [selectedOption, setSelectedOption] = useState([0]);
  
  const collegeOptions = [
    { label: 'Harvard University', value: 'harvard' },
    { label: 'Stanford University', value: 'stanford' },
  ];

  
  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    const selectedLabel = collegeOptions.find(option => option.value === selectedValue).label;
    setSelectedOption({ value: selectedValue, label: selectedLabel });
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
      <p>Selected Value: {selectedOption.value}</p>
      <p>Selected Label: {selectedOption.label}</p>

    </div>
    </>
  );
};

export default Dropdown;
