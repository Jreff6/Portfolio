import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './navbar.scss'; 

function Navbar() {
  const location = useLocation(); // Récupère l'URL actuelle

  return (
    <nav className="navbarWrapper">
      <ul>
        {location.pathname !== '/' && ( // Affiche l'item "Accueil" seulement si l'URL n'est pas "/"
          <li>
            <Link to="/" className="navbarWrapperItem">Accueil</Link>
          </li>
        )}
        <li><a href="https://www.linkedin.com/in/enzo-todeschini/" target="_blank" rel="noopener noreferrer" className="navbarWrapperItem">LinkedIn</a></li>
        <li><a href="https://github.com/Jreff6" target="_blank" rel="noopener noreferrer" className="navbarWrapperItem">GitHub</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
