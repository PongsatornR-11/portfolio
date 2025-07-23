import React from 'react';
import ImageHover from '../style/ImageHover';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCardMdV2 = ({ dataProject, reverse = false }) => {
    const { title, description, technologies, image, links } = dataProject;

    const gitLink = links.find(link => link.name === 'git');
    const websiteLink = links.find(link => link.name === 'website');

    const imageSection = (
        <div className="w-full md:w-1/2">
            <a href={websiteLink?.href || gitLink?.href} target='_blank' rel='noopener noreferrer'>
                <ImageHover src={image} className='rounded-md' />
            </a>
        </div>
    );

    const descriptionSection = (
        <div className={`w-full md:w-1/2 md:p-1 flex flex-col ${reverse ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}>
            <p className='font-mono text-sm text-secondary'>Featured Project</p>
            <h3 className='text-2xl font-bold mt-2 hover:text-secondary transition-colors'>
                <a href={websiteLink?.href || gitLink?.href} target='_blank' rel='noopener noreferrer'>
                    {title}
                </a>
            </h3>
            <div className='my-4 p-6 bg-neutral text-sm rounded-md shadow-xl'>
                {description}
            </div>
            <ul className={`flex flex-wrap gap-2 text-sm ${reverse ? 'md:justify-end' : 'md:justify-start'}`}>
                {technologies.map((tech, i) => (
                    <li key={i} className='border p-1 rounded-md text-secondary border-secondary'>{tech}</li>
                ))}
            </ul>
            <div className='flex gap-4 mt-4'>
                {gitLink && (
                    <a href={gitLink.href} target='_blank' rel='noopener noreferrer' aria-label="GitHub Link">
                        <Github className='hover:text-secondary hover:-translate-y-0.5 transition-all duration-200' />
                    </a>
                )}
                {websiteLink && (
                    <a href={websiteLink.href} target='_blank' rel='noopener noreferrer' aria-label="External Link">
                        <ExternalLink className='hover:text-secondary hover:-translate-y-0.5 transition-all duration-200' />
                    </a>
                )}
            </div>
        </div>
    );

    return (
        <div className={`flex flex-col md:flex-row items-center gap-8 my-12 ${reverse ? 'md:flex-row-reverse' : ''}`}>
            {imageSection}
            {descriptionSection}
        </div>
    );
};

export default ProjectCardMdV2;
