import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaServer, FaCode, FaLink, FaGithub } from 'react-icons/fa';
import { SiExpress, SiTailwindcss, SiVite, SiSocketdotio, SiSystem76 } from 'react-icons/si';

const TechIcon = ({ icon, label }) => (
  <div className="flex items-center space-x-2 bg-gray-200 dark:bg-neutral px-3 py-1 rounded-full">
    {icon}
    <span className="text-sm font-medium">{label}</span>
  </div>
);

const ProjectShowcase = ({ DataProject }) => {
  const { header, overview, backend, frontend, challenges } = DataProject;

  const techIconMap = {
    "Node.js": <FaNodeJs className="text-green-500" />,
    "Express.js": <SiExpress />,
    "Socket.io": <SiSocketdotio className="text-black" />,
    "systeminformation": <SiSystem76 className="text-blue-400" />,
    "React": <FaReact className="text-blue-400" />,
    "Vite": <SiVite className="text-purple-500" />,
    "Tailwind CSS": <SiTailwindcss className="text-teal-400" />,
    "Recharts": <FaCode />,
    "Python": <FaCode />,
    "Django": <FaCode />,
    "PostgreSQL": <FaDatabase />,
    "Vue.js": <FaCode />,
    "Nuxt.js": <FaCode />,
    "SCSS": <FaCode />,
  };

  return (
    <div className="mt-20 mx-20 bg-gray-50 dark:bg-primary text-gray-900 dark:text-accent p-4 sm:p-6 lg:p-8 shadow-2xl">
      <header className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">{header.title}</h1>
        <p className="mt-3 text-lg text-gray-600 dark:text-accent max-w-2xl mx-auto">
          {header.subtitle}
        </p>
      </header>

      {/* Project Overview & Links */}
      <div className="bg-white dark:bg-neutral rounded-lg shadow-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-3">{overview.title}</h3>
            <p className="mb-4">
              {overview.description}
            </p>
            <h4 className="text-xl font-semibold mb-2">My Role:</h4>
            <p className="mb-4">{overview.role}</p>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-semibold mb-2">Key Features:</h4>
              <ul className="list-disc list-inside space-y-1">
                {overview.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href={overview.links.live} className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-primary bg-secondary rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-transform transform hover:scale-105">
                <FaLink className="mr-2" /> Live Demo
              </a>
              <a href={overview.links.source} className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-secondary bg-transparent border border-secondary rounded-md hover:bg-secondary hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-transform transform hover:scale-105">
                <FaGithub className="mr-2" /> Source Code
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Backend Section */}
      <div className="bg-white dark:bg-neutral rounded-lg shadow-lg p-6 mb-8">
        <h3 className="text-2xl font-bold mb-4 flex items-center"><FaServer className="mr-3 text-secondary" />{backend.title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-xl font-semibold mb-2">API Summary</h4>
            <p>
              {backend.summary}
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">{backend.database.title}</h4>
            <div className="w-full h-48 bg-gray-200 dark:bg-primary rounded-md flex items-center justify-center border-2 border-dashed border-neutral">
              <FaDatabase className="text-4xl text-accent" />
              <span className="ml-4 text-accent">{backend.database.description}</span>
            </div>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-xl font-semibold mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-3">
              {backend.techStack.map((tech, index) => (
                <TechIcon key={index} icon={techIconMap[tech]} label={tech} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Frontend Section */}
      <div className="bg-white dark:bg-neutral rounded-lg shadow-lg p-6 mb-8">
        <h3 className="text-2xl font-bold mb-4 flex items-center"><FaReact className="mr-3 text-secondary" />{frontend.title}</h3>
        <div className="md:col-span-2 mb-6">
            <h4 className="text-xl font-semibold mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-3">
              {frontend.techStack.map((tech, index) => (
                <TechIcon key={index} icon={techIconMap[tech]} label={tech} />
              ))}
            </div>
          </div>
        <div>
          <h4 className="text-xl font-semibold mb-4 text-center">{frontend.screenshots.title}</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {frontend.screenshots.images.map((_, i) => (
              <div key={i} className="w-full h-40 bg-gray-200 dark:bg-primary rounded-lg flex items-center justify-center border-2 border-dashed border-neutral hover:border-secondary transition-all">
                <span className="text-accent">Page {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Challenges and Solutions */}
      <div className="bg-white dark:bg-neutral rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-bold mb-4">{challenges.title}</h3>
        <p>
          {challenges.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectShowcase;