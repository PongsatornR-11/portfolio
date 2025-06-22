import React from 'react'
import ImageHover from './style/ImageHover'
import NodeJS from './icons/NodeJS'

const Projects = () => {
    return (
        <section className="md:mx-14 mx-8 my-20">
            <div className='max-w-5xl mx-auto text-left text-accent py-4 px-6 sm:px-4 lg:px-10'>

                <div className='flex items-center space-x-8 mb-6'>
                    <h2 className="text-secondary text-2xl font-mono">
                        03. <span className='text-accent font-semibold'>
                            My Projects
                        </span>
                    </h2>
                    <div className='h-px w-40 border'></div>
                </div>



                {/* style of md: */}
                <div className='relative flex'>
                    <ImageHover
                        src={'/mountain-3.jpg'}
                        className={'absolute left-0 w-2/3 z-0'}
                    />
                    <div className='absolute right-0 z-10 max-w-2/3'>
                        <p className='font-mono text-sm text-secondary text-right'>Featured Project</p>
                        <p className='text-2xl font-bold text-right'>Ecommerce <span className='text-2xl font-medium'>(Full Stack)</span></p>
                        <div className='my-4 p-4 bg-neutral rounded-md'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</div>
                        <div>
                            <span>Tech Stacks:</span><ul className='flex'>
                                <li>Node js (express)</li>
                                <li>React</li>
                                <li>MySql</li>
                                <li>Prisma (ORM)</li>
                            </ul>
                        </div>
                    </div>
                </div>



            </div>
        </section>
    )
}

export default Projects