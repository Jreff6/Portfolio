import React from 'react';
import Navbar from '../../components/navbar/navbar';
import projectData from '../../assets/data/projects.json';
import { useParams } from 'react-router-dom';
import './project.scss'; 

const Project = () => {
  const { id } = useParams();
  const project = projectData.find((proj) => proj.id === parseInt(id));

  return (
    <div className="projectWrapper">
      <Navbar />
      <div className="projectContent">
        {project ? (
          <>
            <h1>{project.title}</h1>
            <div className="project-image" style={{ backgroundImage: `url("${project.image}")` }}></div>
            <p>{project.text}</p>
            <a href={project.lien} target="_blank" rel="noopener noreferrer">Voir le code</a>
          </>
        ) : (
          <p>Projet introuvable.</p>
        )}
      </div>
    </div>
  );
};

export default Project;
