import React from 'react';

const Project = ({ title, image, deployedLink, githubLink }) => {
    return (
        <div className="project">
            <h3>{title}</h3>
            <img src={image} alt={title} className="project-image" />
            <div className="project-links">
                <a href={deployedLink} target="_blank" rel="noopener noreferrer">View Deployed App</a>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">View GitHub Repo</a>
            </div>
        </div>
    );
};

export default Project;