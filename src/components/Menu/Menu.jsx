import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss'; 

function Menu() {
  return (
    <div className="menuWrapper">
      <ul>
        <li><Link to="/directory"> Mes projets</Link></li>
        <li><Link to="/contact">Me contacter</Link></li>
        <li><Link to="/CV" target='_blank' rel='noopener noreferrer'>Mon CV</Link></li>
      </ul>
    </div>
  );
}

export default Menu;
