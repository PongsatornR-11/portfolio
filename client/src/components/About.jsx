import React from 'react'
import ImageHover from './style/ImageHover'
import TechStackIcon from './utils/TechStackIcon'

const aboutTechStacks = [
    { name: 'HTML & CSS', iconName: 'html5' },
    { name: 'JavaScript (ES6+)', iconName: 'js' },
    { name: 'React', iconName: 'react' },
    { name: 'Next.js', iconName: 'nextjs2' },
    { name: 'Node.js', iconName: 'nodejs' },
    { name: 'Express.js', iconName: 'expressjs' },
    { name: 'MySQL', iconName: 'mysql' },
    { name: 'Git & GitHub', iconName: 'git' },
]
const About = () => {
    return (
        <section className="md:mx-14 mx-8 my-40">
            <div className='max-w-5xl mx-auto text-left text-accent py-4 px-6 sm:px-4 lg:px-10'>
                <div className='flex items-center space-x-8 mb-6'>
                    <h2 className="text-secondary text-2xl font-mono">01. <span className='text-accent font-semibold'>About Me</span></h2>
                    <div className='h-px w-40 border'></div>
                </div>

                <div className="flex flex-col md:flex-row items-start gap-8">


                    {/* Text Content */}
                    <div className="md:w-1/2 w-full space-y-4">
                        <p>
                            Highly motivated and self-taught Full Stack Software Engineer with a Bachelor's degree in Electrical Engineering (Power). Passionate about developing robust, user-friendly web applications.
                        </p>
                        <p>
                            Brings a strong foundation in electronics production and equipment engineering, with proven skills in problem-solving, system optimization, and analytical thinking.
                        </p>
                        <p>
                            Proficient in modern web technologies including JavaScript (React, Node.js, Express.js), Next.js, and database management (MySQL, SQL). Eager to contribute to innovative software solutions through full-stack development expertise.
                        </p>
                        <div>
                            <h3 className="text-secondary font-semibold mt-4 mb-2">Technologies I've been working with recently:</h3>
                            <ul className="list-disc list-inside grid grid-cols-2 gap-1">
                                {
                                    aboutTechStacks.map((techStack, index) => {
                                        return (
                                            <li key={index} className='flex'>
                                                <div className='flex gap-2'>
                                                    <TechStackIcon name={techStack.iconName} />
                                                    <span>{techStack.name}</span>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>

                    <div className="md:w-1/2 w-full flex justify-center">

                        <div className="relative w-64 group ">

                            <ImageHover
                                src="/mountain-3.jpg"
                                alt="Hover Image"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1 z-10"
                            />
                            <div className="absolute inset-0 translate-4 border-2 rounded-md border-secondary transition-transform duration-300 ease-out group-hover:translate-x-5 group-hover:translate-y-5 z-0" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About