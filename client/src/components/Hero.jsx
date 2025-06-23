import React from 'react'
import FadeIn from './style/FadeIn'
import Button from './utils/Button'

const Hero = () => {
    const heroComponents = [
        {
            name: 'MyNameIs',
            element: <p className="text-secondary font-mono text-lg mb-4">
                Hi, my name is
            </p>
        },
        {
            name: 'MainHeading',
            element: <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-accent leading-tight mb-4">
                Bass, Pongsatorn
            </h1>
        },
        {
            name: 'Quote',
            element: <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-500 leading-tight mb-8">
                I build things for the web.
            </h2>
        },
        {
            name: 'Description',
            element: <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-12">
                I'm a software engineer specializing in building (and occasionally
                designing) exceptional digital experiences. Currently, I'm focused on
                building accessible, human-centered products at{' '}
                <a href="#about" className="text-secondary hover:underline">
                    About ME
                </a>.
            </p>
        },
        {
            name: 'Button',
            element:
                <a href='#projects'>
                    <Button className="border-2 border-secondary text-secondary px-8 py-4 rounded-md text-lg font-mono hover:bg-opacity-10 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-50">
                        Check out my Projects!
                    </Button>
                </a>
        }
    ]
    return (
        <section className='md:mx-14 pt-4 mx-8 h-screen'>
            <div className="max-w-5xl mx-auto text-left py-4 px-6 sm:px-4 lg:px-10">
                {
                    heroComponents.map((heroComponent, index) => {
                        return (
                            <FadeIn delay={index * 300 + 2000} duration={400} translateY='1rem'>
                                {heroComponent.element}
                            </FadeIn>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Hero