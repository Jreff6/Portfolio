import React from 'react';
import './navbar.scss'; 

function Navbar() {
  return (
    <nav className="navbarWrapper">
      <ul>
        <li><a href="https://www.linkedin.com/in/enzo-todeschini/" target="_blank" rel="noopener noreferrer" className="navbarWrapperItem">LinkedIn</a></li>
        <li><a href="https://github.com/Jreff6" target="_blank" rel="noopener noreferrer" className="navbarWrapperItem">GitHub</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
