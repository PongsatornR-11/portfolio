import React from 'react';
import { Github, ExternalLink } from 'lucide-react'

const ProjectCard = ({ dataProject }) => {
    const { title, description, technologies, image, links } = dataProject;
    const gitLink = links.find(link => link.name === 'git');
    const websiteLink = links.find(link => link.name === 'website');
    return (
        <div className="relative border w-full overflow-hidden rounded-lg my-10">
            {/* Background Image */}
            <img
                src={image}
                alt="Project Background"
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
            />

            {/* Overlay Content */}
            <div className="relative z-10 p-6 text-white rounded-lg shadow-lg">
                <p className="font-mono text-sm text-secondary">Featured Project</p>
                <p className="text-2xl font-bold">
                    {title}
                </p>

                <div className="my-4 p-4">
                    {description}
                </div>

                <div className="flex justify-center">
                    <ul className='flex justify-start space-x-4 text-sm items-center'>
                        {
                            technologies.map((tech, i) => <li key={i} className='border p-1 rounded-md'>{tech}</li>)
                        }
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
};

export default ProjectCard;
