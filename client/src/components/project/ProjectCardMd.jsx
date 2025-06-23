import React from 'react'
import ImageHover from '../style/ImageHover'

export function ProjectCardMdRight({ project }) {
    return (
        <div className='relative flex my-10'>
            <ImageHover
                src={'/mountain-3.jpg'}
                className={'w-2/3 z-0'}
            />
            <div className='absolute right-0 z-10 max-w-2/3'>
                <p className='font-mono text-sm text-secondary text-right'>Featured Project</p>
                <p className='text-2xl font-bold text-right'>Ecommerce <span className='text-2xl font-medium'>(Full Stack)</span></p>
                <div className='my-4 p-4 bg-neutral rounded-md shadow-xl'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</div>
                <div className='flex justify-end'>
                    <div className='w-2/3 text-right'>
                        <span className='p-2 text-sm'>Tech Stacks</span>
                        <ul className='flex justify-around'>
                            <li>Node js (express)</li>
                            <li>React</li>
                            <li>MySql</li>
                            <li>Prisma (ORM)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export function ProjectCardMdLeft({ project }) {
    return (
        <div className='relative flex my-10'>
            <div className='w-full flex'>
                <div className='w-1/3'>
                </div>
                <ImageHover
                    src={'/mountain-3.jpg'}
                    className={'absolute right-0 w-2/3 z-0'}
                />
            </div>
            <div className='absolute left-0 z-10 max-w-2/3'>
                <p className='font-mono text-sm text-secondary'>Featured Project</p>
                <p className='text-2xl font-bold'>Ecommerce <span className='text-2xl font-medium'>(Full Stack)</span></p>
                <div className='my-4 p-4 bg-neutral rounded-md shadow-xl'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</div>
                <div className='w-2/3'>
                    <span className='p-2 text-sm'>Tech Stacks:</span>
                    <ul className='flex justify-around'>
                        <li>Node js (express)</li>
                        <li>React</li>
                        <li>MySql</li>
                        <li>Prisma (ORM)</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}