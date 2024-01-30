import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

// const ProjectGallery = ({projects}) => {
//     return (
//         <div className="row"> 
//             {projects.map((project, index) => (
//                 <div className="col-md-4" key={index}> 
//                     <div className="card">
//                         <img src={project.image} className="card-img-top" alt={project.title} />
//                         <div className="card-body">
//                             <h5 className="card-title">{project.title}</h5>
//                             <p className="card-text">{project.description}</p>
//                             <a href={project.link} className="btn btn-primary">See my project here!</a>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }

const ProjectGallery = ({projects}) => {
    return (
        <div className="row"> 
            {projects.map((project, index) => (
                <div className="col-md-4" key={index}> 
                    <ProjectCard project={project} />
                </div>
            ))}
        </div>
    );
}

export default ProjectGallery;
