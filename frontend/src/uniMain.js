import React from 'react';

function Sidebar() {
  const sidebarStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    width: '25%',
    backgroundColor: '#f1f1f1',
    position: 'fixed',
    height: '100%',
    overflow: 'auto',
  };

  const linkStyle = {
    display: 'block',
    color: '#000',
    padding: '8px 16px',
    textDecoration: 'none',
  };

  const activeLinkStyle = {
    backgroundColor: '#04AA6D',
    color: 'white',
  };

  const contentStyle = {
    marginLeft: '25%',
    padding: '1px 16px',
    height: '1000px',
  };

  return (
    <div>
      <ul style={sidebarStyle}>
        <li><a style={linkStyle} className="active" href="#home">Home</a></li>
        <li><a style={linkStyle} href="#news">News</a></li>
        <li><a style={linkStyle} href="#contact">Contact</a></li>
        <li><a style={linkStyle} href="#about">About</a></li>
      </ul>
      <div style={contentStyle} className="content">
        <h2>Fixed Full-height Side Nav</h2>
        <h3>Try to scroll this area, and see how the sidenav sticks to the page</h3>
        <p>Notice that this div element has a left margin of 25%. This is because the side navigation is set to 25% width. If you remove the margin, the sidenav will overlay/sit on top of this div.</p>
        <p>Also notice that we have set overflow:auto to sidenav. This will add a scrollbar when the sidenav is too long (for example if it has over 50 links inside of it).</p>
        <p>Some text..</p>
        <p>Some text..</p>
        <p>Some text..</p>
        <p>Some text..</p>
        <p>Some text..</p>
        <p>Some text..</p>
        <p>Some text..</p>
      </div>
    </div>
  );
}

export default Sidebar;
