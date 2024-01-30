import React from "react";
import { Link } from "react-router-dom";
import Project from "./Project";
import ProjectCard from "./ProjectCard";

const ProjectGallery = ({projects}) => {
    return (
        <div className="project-gallery">
            {projects.map((projects, index) => (
                <ProjectCard key={index} project={projects}/> 
            ))}
    </div>
    );  
};

export default ProjectGallery; 