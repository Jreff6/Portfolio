import React from 'react';
import { useParams } from 'react-router-dom';
import projectData from '../../assets/data/projects.json'; 
import Navbar from '../../components/navbar/navbar'; 
import './project.scss'; 

const Project = () => {
  const { id } = useParams(); // Récupère l'ID du projet depuis l'URL
  const project = projectData.find((p) => p.id === parseInt(id)); // Trouve le projet correspondant

  if (!project) {
    return <div>Projet non trouvé</div>; // Gérer le cas où le projet n'existe pas
  }

  return (
    <div className="projectWrapper">
      <Navbar />
      <div className="projectDetails">
        <div className="projectImage" style={{ backgroundImage: `url("${project.image}")` }}></div>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        {project.text && <p>{project.text}</p>} {/* Affiche le texte si disponible */}
        <a href={project.lien} target="_blank" rel="noopener noreferrer" className="projectLink">Voir le projet sur GitHub</a>
      </div>
    </div>
  );
};

export default Project;
