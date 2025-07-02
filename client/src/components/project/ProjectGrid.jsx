import React, { useState } from 'react'

import ProjectCardSmall from './ProjectCardSmall'
import Button from '../utils/Button'
import FadeInScroll from '../style/FadeInScroll'

const ProjectGrid = () => {
    const [showMore, setShowMore] = useState(false)
    const project = [
        {
            title: 'System Monitor',
            description: 'A system monitor application that displays real-time CPU, memory, and network usage.',
            tags: ['React', 'Tailwind CSS', 'JavaScript'],
            github: '#',
            liveDemo: '#',
            image: '/ProjectPics/Screenshot Systemmonitor Project.jpg'
        },
        {
            title: 'Project 2',
            description: 'A brief description of Project 2.',
            tags: ['Next.js', 'CSS', 'TypeScript'],
            github: '#',
            liveDemo: '#'
        },
        {
            title: 'Project 3',
            description: 'A brief description of Project 3.',
            tags: ['Node.js', 'Express', 'MongoDB'],
            github: '#',
            liveDemo: '#'
        },
        {
            title: 'Project 4',
            description: 'A brief description of Project 4.',
            tags: ['Vue.js', 'Bootstrap', 'JavaScript'],
            github: '#',
            liveDemo: '#'
        },
        {
            title: 'Project 5',
            description: 'A brief description of Project 5.',
            tags: ['Angular', 'Material UI', 'TypeScript'],
            github: '#',
            liveDemo: '#'
        }
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
            {
                project.slice(0, showMore ? project.length : 2).map((dataProject, index) => (
                    <FadeInScroll>
                        <ProjectCardSmall key={index} dataProject={dataProject} />
                    </FadeInScroll>
                ))
            }
            {!showMore ? (
                <div className='col-span-full text-center mt-4'>
                    <Button
                        onClick={() => setShowMore(true)}
                        className={'border px-6 py-4 text-sm rounded-md font-mono'}
                    >Show More
                    </Button>
                </div>
            ) :
                <div className='col-span-full text-center mt-4'>
                    <Button
                        onClick={() => setShowMore(false)}
                        className={'border px-6 py-4 text-sm rounded-md font-mono'}
                    > Show Less
                    </Button>
                </div>
            }
        </div>
    )
}

export default ProjectGrid