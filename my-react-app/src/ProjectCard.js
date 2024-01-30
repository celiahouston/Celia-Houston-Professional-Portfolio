import React from "react";

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <img src={project.image} alt={project.title} className="card-img-top" />
            <h3 className="card-title">{project.title}</h3>
            <p className="card-text">{project.description}</p>
            <a href={project.link} className="btn btn-primary">View Project</a>
        </div>
    );
};

export default ProjectCard; 