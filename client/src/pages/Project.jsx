import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectShowcase from '../components/project/ProjectShowcase';
import { showcaseProjects } from '../constants/showcaseProject';

const Project = () => {
    const { projectId } = useParams();
    const project = showcaseProjects.find(project => project.id === projectId);

    return (
        <>
            {project ? (
                <ProjectShowcase DataProject={project} />
            ) : (
                <p>Project not found</p>
            )}
        </>
    );
};

export default Project;