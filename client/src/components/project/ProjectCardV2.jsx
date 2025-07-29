import React from 'react';
import { Link } from 'react-router-dom';

import { Github, ExternalLink } from 'lucide-react';
import { techIconMap } from '../icons/techIcons.jsx';


import ImageHover from '../style/ImageHover';
import FancyLink from '../style/FancyLink'

const TechIcon = ({ icon, label }) => (
    <div className="flex items-center space-x-1 bg-primary px-2 py-1 rounded-full text-xs">
        {icon}
        <span>{label}</span>
    </div>
);

const ProjectCardV2 = ({ dataProject }) => {
    const { title, description, technologies, image, links, id } = dataProject;


    const gitLink = links.find(link => link.name === 'git');
    const websiteLink = links.find(link => link.name === 'website');
    const projectLink = id ? `/project/${id}` : websiteLink?.href || gitLink?.href;

    return (
        <div className="bg-neutral rounded-lg shadow-lg overflow-hidden my-10 flex flex-col h-full">
            <Link to={projectLink}>
                <ImageHover src={image} className="w-full h-48 object-cover" />
            </Link>
            <div className="p-6 flex flex-col flex-grow">
                <div>
                    <p className="font-mono text-sm text-secondary">Featured Project</p>
                    <h3 className="text-xl font-bold mt-2">
                        <Link to={projectLink}>
                            <FancyLink>
                                {title}
                            </FancyLink>
                        </Link>
                    </h3>
                </div>
                <p className="my-4 text-sm flex-grow">{description}</p>
                <div>
                    <ul className="flex flex-wrap gap-2 text-xs mb-4">
                        {technologies.flatMap((tech, i) => {
                            if (tech === 'Node.js (Express)') {
                                return [<TechIcon key={`node-${i}`} icon={techIconMap['Node.js']} label="Node.js" />,
                                <TechIcon key={`express-${i}`} icon={techIconMap['Express.js']} label="Express.js" />];
                            } else {
                                return <TechIcon key={i} icon={techIconMap[tech]} label={tech} />;
                            }
                        })}
                    </ul>
                    <div className='flex justify-end space-x-4'>
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
            </div>
        </div>
    );
};

export default ProjectCardV2;
