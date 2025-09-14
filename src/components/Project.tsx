import React from 'react'

interface ProjectProps {
    name: string;
    description: string;
    url: string;
}

const Project = ({ name, description, url } : ProjectProps) => {
    return (
        <div className="project">
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            <a href={url} target="_blank">Voir le projet</a>
        </div>
    )
}
export default Project
