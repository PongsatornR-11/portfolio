import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import ImageHover from '../style/ImageHover';

const ProjectCardV2 = ({ dataProject }) => {
    const { title, description, technologies, image, links } = dataProject;
    const gitLink = links.find(link => link.name === 'git');
    const websiteLink = links.find(link => link.name === 'website');

    return (
        <div className="bg-neutral rounded-lg shadow-lg overflow-hidden my-10 flex flex-col h-full">
            <a href={websiteLink?.href || gitLink?.href} target='_blank' rel='noopener noreferrer'>
                <ImageHover src={image} className="w-full h-48 object-cover" />
            </a>
            <div className="p-6 flex flex-col flex-grow">
                <div>
                    <p className="font-mono text-sm text-secondary">Featured Project</p>
                    <h3 className="text-xl font-bold mt-2 hover:text-secondary transition-colors">
                        <a href={websiteLink?.href || gitLink?.href} target='_blank' rel='noopener noreferrer'>
                            {title}
                        </a>
                    </h3>
                </div>
                <p className="my-4 text-sm flex-grow">{description}</p>
                <div>
                    <ul className="flex flex-wrap gap-2 text-xs mb-4">
                        {technologies.map((tech, i) => (
                            <li key={i} className="px-2 py-1 bg-gray-700 text-gray-300 rounded-full">{tech}</li>
                        ))}
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
