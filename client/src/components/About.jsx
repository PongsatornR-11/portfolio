import React from 'react'
import ImageHover from './style/ImageHover'

const About = () => {
    return (
        <section className="md:mx-14 mx-8 ">
            <div className='max-w-5xl mx-auto text-left text-accent py-4 px-6 sm:px-4 lg:px-10'>
                <div className='flex items-center space-x-8 mb-6'>
                    <h2 className="text-secondary text-2xl font-mono">01. <span className='text-accent font-semibold'>About Me</span></h2>
                    <div className='h-px w-40 border border-sub'></div>
                </div>

                <div className="flex flex-col md:flex-row items-start gap-8">


                    {/* Text Content */}
                    <div className="md:w-1/2 w-full space-y-4">
                        <p>
                            Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                        </p>
                        <p>
                            Fast-forward to today, and I've had the privilege of working at an <span className="text-teal-400">advertising agency</span>, <span className="text-teal-400">a start-up</span>, <span className="text-teal-400">a huge corporation</span>, and <span className="text-teal-400">a student-led design studio</span>. My main focus these days is building accessible, inclusive products and digital experiences at <span className="text-teal-400">Upstatement</span> for a variety of clients.
                        </p>
                        <p>
                            I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
                        </p>
                        <div>
                            <h3 className="text-secondary font-semibold mt-4 mb-2">Technologies I've been working with recently:</h3>
                            <ul className="list-disc list-inside space-y-1">
                                <li>JavaScript (ES6+)</li>
                                <li>React</li>
                                <li>Node.js</li>
                                <li>TypeScript</li>
                                <li>Eleventy</li>
                                <li>WordPress</li>
                            </ul>
                        </div>
                    </div>

                    {/* Image Placeholder */}
                    <div className="md:w-1/2 w-full ">
                        <div className="w-full rounded-lg flex items-center justify-center">
                            {/* <span className="text-gray-400">[Photo of Brittany]</span> */}
                            <ImageHover src={'/test-mountain.jpg'} className={'hover:-translate-1 hover:shadow-[4px_4px_1px_rgba(100,255,218,1)]'} />
                        </div>
                        <div className='h-50 border border-secondary translate-2 hover:translate-6'></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About