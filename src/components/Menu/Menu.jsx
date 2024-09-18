import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss'; 

function Menu() {
  return (
    <div className="menuWrapper">
      <ul>
        <li><Link to="/directory"> {'\uE27A'}es projets</Link></li>
        <li><Link to="/contact"> contacter</Link></li>
        <li><Link to="/CV">on CV</Link></li>
      </ul>
    </div>
  );
}

export default Menu;
