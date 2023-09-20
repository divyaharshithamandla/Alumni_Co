// import React, { useEffect, useState } from "react";
// import axios from 'axios';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// function Searchbar(){
//     const [val,setVal]=useState('')
//     const data=[
//         "Java",
//         "JavaScript",
//         "React js",
//         "Python",
//         "C",
//         "C++",
//     ]
//     return(
//         <div>
          
//             <input list="data" onChange={(e)=>setVal(e.target.value)} placeholder="Search"  /> 
          
            
//             <datalist id="data">
//                 {/* <option>One</option>
//                 <option>Two</option>
//                 <option>Three</option>
//                 <option>Four</option> */}
//                 {data.map((op)=><option>{op}</option>)}
//             </datalist>

//             <h1>{val}</h1>
//         </div>
//     );
// }
// export default Searchbar;
import React, { useState } from 'react';

const Searchbar = ({ cx, apiKey }) => {
  const [query, setQuery] = useState('');
  
  const handleSearch = () => {
    // Perform the search using the searchUrl and fetch() or any preferred HTTP library.
    const searchUrl = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(
    query
  )}&cx=${cx}&key=${apiKey}`;

  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Google"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Searchbar;

