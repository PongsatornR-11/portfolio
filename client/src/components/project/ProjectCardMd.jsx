import React from 'react'
import ImageHover from '../style/ImageHover'
import { Github, ExternalLink } from 'lucide-react'

export function ProjectCardMdRight({ dataProject }) {
    const { title, description, technologies, image, links } = dataProject;

    return (
        <div className='relative flex my-10'>
            <ImageHover src={image} className='w-2/3 z-0' />
            <div className='absolute right-0 z-10 max-w-2/3'>
                <p className='font-mono text-sm text-secondary text-right'>Featured Project</p>
                <p className='text-2xl font-bold text-right'>{title}</p>
                <div className='my-4 p-4 bg-neutral rounded-md shadow-xl'>{description}</div>
                <div className='flex justify-end'>
                        <ul className='flex justify-start space-x-4 text-sm items-center'>
                            {technologies.map((tech, i) => (
                                <li key={i} className='border p-1 rounded-md'>{tech}</li>
                            ))}
                        </ul>
                </div>
                <div className='my-4 flex justify-end space-x-4'>
                    <a href="">
                    <Github className='hover:text-secondary hover:-translate-y-0.5 transition-all duration-200' />
                    </a>
                    <ExternalLink className='hover:text-secondary hover:-translate-y-0.5 transition-all duration-200' />
                </div>
            </div>
        </div>
    );
}


export function ProjectCardMdLeft({ dataProject }) {
    const { title, description, technologies, image } = dataProject;
    return (
        <div className='relative flex my-10'>
            <div className='w-full flex'>
                <div className='w-1/3'>
                </div>
                <ImageHover
                    src={image}
                    className={'absolute right-0 w-2/3 z-0'}
                />
            </div>
            <div className='absolute left-0 z-10 max-w-2/3'>
                <p className='font-mono text-sm text-secondary'>Featured Project</p>
                <p className='text-2xl font-bold'>{title}</p>
                <div className='my-4 p-4 bg-neutral rounded-md shadow-xl'>
                    {description}
                </div>
                <div className='w-2/3'>
                    <ul className='flex justify-start space-x-4 text-sm items-center'>
                        {
                            technologies.map((tech, i) => <li key={i} className='border p-1 rounded-md'>{tech}</li>)
                        }
                    </ul>
                </div>
                <div className='my-4 flex justify-start space-x-4'>
                    <Github className='hover:text-secondary hover:-translate-y-0.5 transition-all duration-200' />
                    <ExternalLink className='hover:text-secondary hover:-translate-y-0.5 transition-all duration-200' />
                </div>
            </div>
        </div>
    )
}