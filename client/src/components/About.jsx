import React from 'react'
import FadeInSection from './style/FadeInSection'

const About = () => {
    const about = [1, 2]
    return (
        <div>
            {
                about.map((item, index) => {
                    return (
                        <div key={index}>
                            <FadeInSection duration={1500} delay={300}>
                                <div className="p-6 bg-primary text-accent border h-screen flex items-center shadow-md rounded-md">
                                    <h2 className="text-xl font-bold">{item}About me 1</h2>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore laboriosam molestias sequi cumque soluta illo temporibus natus id itaque iure recusandae reprehenderit, saepe ullam dolores necessitatibus distinctio quos ipsa asperiores!</p>
                                </div>
                            </FadeInSection>
                        </div>
                    )
                })
            }

            <FadeInSection>
                <div className="p-6 bg-a shadow-md rounded-md">
                    <h2 className="text-xl font-bold">about you? 2</h2>
                    <p>2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consectetur aliquid ab in impedit? Vel, nam maxime molestias non eos labore deleniti pariatur earum saepe explicabo recusandae eligendi, numquam debitis!</p>
                </div>
            </FadeInSection>

        </div>
    )
}

export default About