import React, { useState } from 'react';
import FancyLink from './style/FancyLink';
import { skills } from '../constants/skills';
import TechStackIcon from './utils/TechStackIcon';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null)
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

          <div className="flex flex-wrap justify-center relative">
            {skills.map((skill, index) => (
              <a
                href={skill.href}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="relative"
              >
                <div className="border border-secondary text-secondary rounded-full px-4 py-2 m-2
            transition:all duration-300 ease-in-out hover:-translate-y-1">
                  {skill.name}
                </div>
                {hoveredSkill === index && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mb-2 w-64 p-2 bg-neutral text-accent text-sm rounded-md shadow-lg z-20">
                    <TechStackIcon name={skill.icon} size={40}/>
                    <span className='mt-2'>{skill.description}</span>
                  </div>
                )}
              </a>
            ))}
          </div>
          <div className='flex justify-center mt-8 text-accent'>
            <a href="/Pongsatorn's Resume.pdf" target="_blank" rel="noopener noreferrer">
              <FancyLink >
                View My Resume
              </FancyLink>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
