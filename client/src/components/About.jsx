import React from 'react'
import FadeInSection from './style/FadeInSection'

const About = () => {
    const about = [1, 2]
    return (
        <div className='w-full border-2 flex mx-auto flex-col'>
            {
                about.map((item, index) => {
                    return (
                        <FadeInSection duration={1000} delay={200}>
                            <div key={index} className='max-w-xl'>
                                <div className="p-6 bg-primary text-accent border h-screen flex items-center shadow-md">
                                    <h2 className="text-xl font-bold">{item}About me 1</h2>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore laboriosam molestias sequi cumque soluta illo temporibus natus id itaque iure recusandae reprehenderit, saepe ullam dolores necessitatibus distinctio quos ipsa asperiores!</p>
                                </div>
                            </div>
                        </FadeInSection>
                    )
                })
            }

        </div>
    )
}

export default About