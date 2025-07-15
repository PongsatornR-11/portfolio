import React from 'react'
import ImageHover from '../style/ImageHover'
import { Github, ExternalLink } from 'lucide-react'

export function ProjectCardMdRight({ dataProject }) {
    const { title, description, technologies, image, links } = dataProject;

    const gitLink = links.find(link => link.name === 'git');
    const websiteLink = links.find(link => link.name === 'website');
    return (
        <div className='relative flex my-10'>
            <ImageHover src={image} className='w-2/3 z-0' />
            <div className='absolute right-0 z-10 max-w-2/3'>
                <p className='font-mono text-sm text-secondary text-right'>Featured Project</p>
                <p className='text-2xl font-bold text-right'>{title}</p>
                <div className='my-4 p-4 bg-neutral text-sm rounded-md shadow-xl'>{description}</div>
                <div className='flex justify-end'>
                    <ul className='flex justify-start space-x-4 text-sm items-center'>
                        {technologies.map((tech, i) => (
                            <li key={i} className='px-2 py-1 bg-secondary text-neutral rounded-md text-xs'>{tech}</li>
                        ))}
                    </ul>
                </div>
                <div className='my-4 flex justify-end space-x-4'>
                    {gitLink &&
                        (<a href={gitLink.href} target='_blank' rel='noopener noreferrer'>
                            <Github className='hover:text-secondary hover:-translate-y-0.5 transition-all duration-200' />
                        </a>)
                    }
                    {websiteLink && (<a href={websiteLink.href} target='_blank' rel='noopener noreferrer'>
                        <ExternalLink className='hover:text-secondary hover:-translate-y-0.5 transition-all duration-200' />
                    </a>)
                    }
                </div>
            </div>
        </div>

    );
}

export function ProjectCardMdLeft({ dataProject }) {
    const { title, description, technologies, image, links } = dataProject;
    const gitLink = links.find(link => link.name === 'git');
    const websiteLink = links.find(link => link.name === 'website');
    return (
        <div className='relative flex my-10'>
            <div className='w-full flex'>
                <div className='w-1/3'></div>
                <ImageHover src={image} className='w-2/3 z-0' />
            </div>
            <div className='absolute left-0 z-10 max-w-2/3'>
                <p className='font-mono text-sm text-secondary'>Featured Project</p>
                <p className='text-2xl font-bold'>{title}</p>
                <div className='my-4 p-4 bg-neutral text-sm rounded-md shadow-xl'>
                    {description}
                </div>
                <div className='w-2/3'>
                    <ul className='flex justify-start space-x-4 text-sm items-center'>
                        {technologies.map((tech, i) => <li key={i} className='px-2 py-1 bg-secondary text-neutral rounded-md text-xs'>{tech}</li>)}
                    </ul>
                </div>
                <div className='my-4 flex justify-start space-x-4'>
                    {gitLink &&
                        (<a href={gitLink.href} target='_blank' rel='noopener noreferrer'>
                            <Github className='hover:text-secondary hover:-translate-y-0.5 transition-all duration-200' />
                        </a>)
                    }
                    {websiteLink && (<a href={websiteLink.href} target='_blank' rel='noopener noreferrer'>
                        <ExternalLink className='hover:text-secondary hover:-translate-y-0.5 transition-all duration-200' />
                    </a>)
                    }
                </div>
            </div>
        </div>
    )
}