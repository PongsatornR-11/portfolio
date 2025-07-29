import React from 'react';
import { Link } from 'react-router-dom';

import { Github, ExternalLink } from 'lucide-react';
import { techIconMap } from '../icons/techIcons.jsx';

import ImageHover from '../style/ImageHover';
import FancyLink from '../style/FancyLink.jsx';

const TechIcon = ({ icon, label }) => (
    <div className="flex items-center space-x-1 bg-accent dark:bg-primary border border-accent py-1 px-2 rounded-full text-sm select-none">
        {icon}
        <span>{label}</span>
    </div>
);

const ProjectCardMdV2 = ({ dataProject, reverse = false }) => {
    const { title, description, technologies, image, links, id } = dataProject;

    const gitLink = links.find(link => link.name === 'git');
    const websiteLink = links.find(link => link.name === 'website');

    const projectLink = id ? `/project/${id}` : websiteLink?.href || gitLink?.href;

    const imageSection = (
        <div className="w-full md:w-1/2">
            <Link to={projectLink}>
                <ImageHover src={image} className='rounded-md' />
            </Link>
        </div>
    );

    const descriptionSection = (
        <div className={`w-full md:w-1/2 md:p-1 flex flex-col ${reverse ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}>
            <p className='font-mono text-sm text-secondary'>Featured Project</p>
            <h3 className='text-2xl font-bold mt-2 hover:text-secondary transition-colors'>
                <Link to={projectLink}>
                    <FancyLink>
                        {title}
                    </FancyLink>
                </Link>
            </h3>
            <div className='my-4 p-6 bg-neutral text-sm rounded-md shadow-xl'>
                {description}
            </div>
            <ul className={`flex flex-wrap gap-2 text-sm ${reverse ? 'md:justify-end' : 'md:justify-start'}`}>
                {technologies.flatMap((tech, i) => {
                    if (tech === 'Node.js (Express)') {
                        return [<TechIcon key={`node-${i}`} icon={techIconMap['Node.js']} label="Node.js" />,
                        <TechIcon key={`express-${i}`} icon={techIconMap['Express.js']} label="Express.js" />];
                    } else {
                        return <TechIcon key={i} icon={techIconMap[tech]} label={tech} />;
                    }
                })}
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
