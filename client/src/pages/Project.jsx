import React from 'react'
import ProjectShowcase from '../components/project/ProjectShowcase'
import { showcaseProjects } from '../constants/showcaseProject'

const Project = () => {
    return (
        <>
            <ProjectShowcase DataProject={showcaseProjects[0]} />
        </>
    )
}

export default Project