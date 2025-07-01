import React from 'react'
import { Folder, Github, ExternalLink } from 'lucide-react'

const ProjectCardSmall = ({ dataProject }) => {
    const { title, description, tags, github, liveDemo } = dataProject || {
        title: 'Project Title',
        description: 'A brief description of the project goes here. It should be concise and informative.',
        tags: ['React', 'Tailwind CSS', 'JavaScript'],
        github: '#',
        liveDemo: '#'
    }

    return (
        <div className='px-8 py-10 h-75 rounded-md shadow-lg bg-neutral 
        flex flex-col justify-between
        hover:-translate-y-1 transition-transform duration-300 ease-out'>
            <div className='flex items-center justify-between mb-4'>
                <Folder className='text-secondary size-10' />
                <div className='space-x-2'>
                    <a href={github} target='_blank' rel='noopener noreferrer' className='hover:text-secondary text-accent transition-colors'>
                        <Github className='inline' />
                    </a>
                    <a href={liveDemo} target='_blank' rel='noopener noreferrer' className='hover:text-secondary text-accent transition-colors'>
                        <ExternalLink className='inline' />
                    </a>
                </div>
            </div>
            <div className='h-full'>
                <h3 className='text-xl font-semibold mb-2'>{title}</h3>
                <p className='text-sm mb-4'>{description}</p>
            </div>
            <div className='flex flex-wrap gap-2'>
                {
                    tags.map((tag, index) => (
                        <span key={index} className='px-2 py-1 bg-secondary text-neutral rounded-md text-xs'>
                            {tag}
                        </span>
                    ))
                }
            </div>
        </div>
    )
}

export default ProjectCardSmall