import React from 'react'

interface ProjectData {
    title: string;
    description: string;
    link: string;
    tech: string[];
}

const Project = ({ projectData } : { projectData: ProjectData }) => {
    return (
        <div className="project">
            <div>
                <h2>{projectData.title}</h2>
                <p>{projectData.description}</p>
            </div>
            <div className="bottom">
                <a href={projectData.link} target="_blank">Voir le projet</a>
                <div className="techList">
                    {projectData.tech.map((item) => (
                        <span key={item} className="techItem">{item}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Project
