import React from "react";

const ProjectCard = ({project}) => {
    return (
        <div className="project-card">
            <img src="" alt=""></img>
            <h3>{project.title} </h3>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
        </div>
    );
};

export default ProjectCard; 