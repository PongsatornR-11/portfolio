import React from 'react'
import { ProjectCardMdLeft, ProjectCardMdRight } from './project/ProjectCardMd'
import FadeInScroll from './style/FadeInScroll'
import ProjectCard from './project/ProjectCard'
import ProjectGrid from './project/ProjectGrid'
import FancyLink from './style/FancyLink'


const ProjectList = [
    {
        type: 'right',
        data: {
            title: 'Ecommerce (Full Stack)',
            description: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
            technologies: ['Node.js (Express)', 'React', 'MySQL', 'Prisma (ORM)'],
            image: '/mountain-3.jpg',
            links: [
                { name: 'git', href: 'https://github.com/PongsatornR-11/Ecommerce' },
                { name: 'website', href: 'https://ecommerce-pongsatorn.vercel.app/' }
            ]
        }
    },
    {
        type: 'left',
        data: {
            title: 'Portfolio Website',
            description: 'A personal portfolio website showcasing my projects and skills, built with React and Tailwind CSS.',
            technologies: ['React', 'Tailwind CSS', 'JavaScript'],
            image: '/portfolio.webp',
            links:
                [
                    { name: 'git', href: 'https://github.com/PongsatornR-11/portfolio' },
                    { name: 'website', href: 'https://github.com/PongsatornR-11/portadsfsdfdsafolio' },

                ]
        }
    }
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
                <div className='hidden md:block'>
                    {ProjectList.map((project, index) => {
                        return (
                            <FadeInScroll>
                                {project.type === 'right' ? (
                                    <ProjectCardMdRight key={index} dataProject={project.data} />
                                ) : (
                                    <ProjectCardMdLeft key={index} dataProject={project.data} />
                                )}
                            </FadeInScroll>
                        )
                    })}
                </div>
                <div className='md:hidden'>
                    {ProjectList.map((project, index) => {
                        return (
                            <FadeInScroll>
                                <ProjectCard key={index} dataProject={project.data} />
                            </FadeInScroll>
                        )
                    })}
                </div>

                <div className='mt-24 mb-12'>
                    <div className='h-px w-40 border mx-auto mb-4'></div>
                    <h3 className='text-center text-2xl font-bold'>Other Noteworthy Projects</h3>
                    <div className='flex justify-center my-2'>
                        <FancyLink className='mx-auto text-center font-mono text-sm'>Archive Projects</FancyLink>
                    </div>
                </div>
                {/* <ProjectGrid /> */}
            </div>
        </section>
    )
}

export default Projects