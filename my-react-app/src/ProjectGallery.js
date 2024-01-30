import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const ProjectGallery = ({projects}) => {
    return (
        <div> 
            <h2> Project Gallery</h2>
            <div className="row"> 
            {projects.map((projects, index) => (
                <div className="col-md-4" key={index}> 
                <ProjectCard project={projects} /> 
                {/* <div className="card">
                    <img src={project.img} className="card-img-top" alt={projects.title} />
                    <div className="card-body">
                        <h5 className="card-title">{projects.title}</h5>
                        <p className="card-text">{projects.description}</p>
                        <a href={projects.Link} className="btn btn-primary">See my project here!</a> */}
                    </div>
            //     </div>
            // </div>
            ))}
    </div>
</div>
    );  
};

export default ProjectGallery; 

                // <ProjectCard key={index} project={projects}/> 