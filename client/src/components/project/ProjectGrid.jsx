import React, { useState } from 'react'

import ProjectCardSmall from './ProjectCardSmall'
import Button from '../utils/Button'
import FadeInScroll from '../style/FadeInScroll'

import { projectGrid } from '../../constants/projects'

const ProjectGrid = () => {
    const [showMore, setShowMore] = useState(false)
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
            {
                projectGrid.slice(0, showMore ? projectGrid.length : 2).map((dataProject, index) => (
                    <FadeInScroll key={index}>
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