import React from 'react';
import Button from './utils/Button';
import FancyLink from './style/FancyLink';

const Skills = () => {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript (ES6+)',
    'React',
    'Next.js',
    'Responsive Design',
    'Node.js',
    'Express.js',
    'RESTful APIs',
    'MySQL',
    'SQL',
    'Database Design',
    'Prisma',
    'Git',
    'GitHub',
    'VS Code',
    'Arduino',
    'ESP32',
    'Data Structures',
  ];

  return (
    <section className="md:mx-14 mx-8 my-20">
      <div className='max-w-5xl mx-auto text-left text-accent py-4 px-6 sm:px-4 lg:px-10'>

        <div className="container mx-auto px-4">
          <div className='flex items-center space-x-8 mb-6'>
            <h2 className="text-secondary text-2xl font-mono">
              02. <span className='text-accent font-semibold'>
                My Skills
              </span>
            </h2>
            <div className='h-px w-40 border border-accent'></div>
          </div>
          <div className="flex flex-wrap justify-center b">
            {skills.map((skill, index) => (
              <div key={index} className="border border-secondary text-secondary rounded-full px-4 py-2 m-2
            transition:all duration-300 ease-in-out hover:-translate-y-1">
                {skill}
              </div>
            ))}
          </div>
          <div className='flex justify-center mt-8 text-accent'>
            <a href="/Pongsatorn's Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              <FancyLink >
                View Full Resume
              </FancyLink>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
