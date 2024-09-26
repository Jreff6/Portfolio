import React from 'react';
import Navbar from '../../components/navbar/navbar'; 
import projectData from '../../assets/data/projects.json'; 
import { Link } from 'react-router-dom';
import './directory.scss'; 

const Directory = () => {
  return (
    <div className="directoryWrapper">
      <Navbar />
      <div className="project-list">
        {projectData.map((project) => (
          <Link to={`/project/${project.id}`} key={project.id} className="project-card">
            <div className="project-image" style={{ backgroundImage: `url("${project.image}")` }}></div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Directory;
