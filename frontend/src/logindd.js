import React, { useState } from 'react';
// import { BiSearchAlt2, CgCommunity } from 'react-icons/bi'; // Import your icons
import { CgCommunity } from "react-icons/cg";
import { BiSearchAlt2 } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Logindd() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);

  const toggleLoginDropdown = () => {
    setLoginDropdownOpen(!loginDropdownOpen);
  };

  return (
    <nav>
      <Link to="/" className="title">
        <div><CgCommunity /> CO-ALMS</div>
        {/* <div>Co-alms</div> */}
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/search"><BiSearchAlt2 /></NavLink>
        </li>
        <li>
          <div className="login-dropdown" onClick={toggleLoginDropdown}>
            Login ▼ {/* Dropdown indicator */}
            {loginDropdownOpen && (
              <ul className="login-options">
                <li><a href="/login/alumni">Alumni</a></li>
                <li><a href="/login/student">Student</a></li>
                <li><a href="/login/faculty">Faculty</a></li>
              </ul>
            )}
          </div>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Logindd;













// import React, { useState } from 'react';

// function Logindd() {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const closeDropdown = () => {
//     setDropdownOpen(false);
//   };

//   return (
//     <div className="App">
//       <div className="dropdown">
//         <button onClick={toggleDropdown} className="dropbtn">
//           Login
//         </button>
//         {dropdownOpen && (
//           <div className="dropdown-content">
//             <a href="#">Student</a>
//             <a href="#">Alumni</a>
//             <a href="#">Faculty</a>
//           </div>
//         )}
//       </div>
//       <div className="page-content">
//         {/* Your main content goes here */}
//         <p>Welcome to the main content of your page.</p>
//       </div>
//       <div onClick={closeDropdown} className={`overlay ${dropdownOpen ? 'active' : ''}`}></div>
//     </div>
//   );
// }

// export default Logindd;
