import React from 'react'

interface ProjectData {
    title: string;
    description: string;
    link: string;
    tech: string[];
}

const Project = ({ projectData } : { projectData: ProjectData }) => {
    return (
        <article className="project">
            <div>
                <h2>{projectData.title}</h2>
                <p>{projectData.description}</p>
            </div>
            <div className="bottom">
                <a href={projectData.link} target="_blank" rel="noopener noreferrer" aria-label={`Voir le projet ${projectData.title}`}>Voir le projet</a>
                <div className="techList" role="list" aria-label="Technologies utilisées">
                    {projectData.tech.map((item) => (
                        <span key={item} className="techItem" role="listitem">{item}</span>
                    ))}
                </div>
            </div>
        </article>
    )
}
export default Project
