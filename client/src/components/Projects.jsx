import React from 'react'
import { ProjectCardMdLeft, ProjectCardMdRight } from './project/ProjectCardMd'
import FadeInScroll from './style/FadeInScroll'

const ProjectList = [
    <ProjectCardMdRight />,
    <ProjectCardMdLeft />,
    <ProjectCardMdRight />
]

const Projects = () => {
    return (
        <section className="md:mx-14 mx-8 my-20">
            <div className='max-w-5xl mx-auto text-left text-accent py-4 px-6 sm:px-4 lg:px-10'>

                <div className='flex items-center space-x-8 mb-6'>
                    <h2 className="text-secondary text-2xl font-mono">
                        03. <span className='text-accent font-semibold'>
                            My Projects
                        </span>
                    </h2>
                    <div className='h-px w-40 border'></div>
                </div>

                {ProjectList.map((project, index) => {
                    return (
                        <FadeInScroll>
                            {project}
                        </FadeInScroll>
                    )
                })}



            </div>
        </section>
    )
}

export default Projects