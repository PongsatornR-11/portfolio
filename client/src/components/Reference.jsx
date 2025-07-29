import React from 'react'
import FancyLink from './style/FancyLink'

const Reference = () => {
    return (
        <div className='mx-auto flex gap-2 text-sm text-accent mb-5 justify-center items-center'>
            <div>
                <span>
                    Inspried
                </span>
                <a href="https://github.com/bchiang7/v4">
                    <FancyLink>
                        Brittany Chiang
                    </FancyLink>
                </a>
            </div>
            <div>
                <span>
                    Built from scratch by
                </span>
                <a href="https://github.com/PongsatornR-11/portfolio">
                    <FancyLink>
                        Pongsatorn R.
                    </FancyLink>
                </a>
            </div>
        </div>
    )
}

export default Reference