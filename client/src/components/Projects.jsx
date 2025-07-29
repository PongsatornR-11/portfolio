import React from 'react'

import ProjectCard from './project/ProjectCard'
import ProjectGrid from './project/ProjectGrid'
import FancyLink from './style/FancyLink'


import ProjectCardMdV2 from './project/ProjectCardMdV2'
import ProjectCardV2 from './project/ProjectCardV2'

import FadeInScroll from './style/FadeInScroll'

import { ProjectList } from '../constants/projects'


const Projects = () => {
    return (
        <section className="md:mx-14 mx-8 my-40">
            <div className='max-w-5xl mx-auto text-left text-accent py-4 px-6 sm:px-4 lg:px-10'>
                <div className='flex items-center space-x-8 mb-6'>
                    <h2 className="text-secondary text-2xl font-mono">
                        04. <span className='text-accent font-semibold'>
                            My Projects
                        </span>
                    </h2>
                    <div className='h-px w-40 border'></div>
                </div>
                <div className='hidden md:block'>
                    {ProjectList.map((project, index) => {
                        return (
                            <FadeInScroll key={index}>
                                {/* {project.type === 'right' ? (
                                    <ProjectCardMdRight dataProject={project.data} />
                                ) : (
                                    <ProjectCardMdLeft dataProject={project.data} />
                                )} */}
                                <ProjectCardMdV2 dataProject={project.data} reverse={index % 2 !== 0} />
                            </FadeInScroll>
                        )
                    })}
                </div>
                <div className='md:hidden'>
                    {ProjectList.map((project, index) => {
                        return (
                            <FadeInScroll key={index}>
                                {/* <ProjectCard dataProject={project.data} /> */}
                                <ProjectCardV2 dataProject={project.data} />
                            </FadeInScroll>
                        )
                    })}
                </div>

                {/* <div className='mt-24 mb-12'>
                    <div className='h-px w-40 border mx-auto mb-4'></div>
                    <h3 className='text-center text-2xl font-bold'>Other Noteworthy Projects</h3>
                    <div className='flex justify-center my-2'>
                        <FancyLink className='mx-auto text-center font-mono text-sm'>Archive Projects</FancyLink>
                    </div>
                </div> */}

                {/* <ProjectGrid /> */}
            </div>
        </section>
    )
}

export default Projects