
import React from "react";
import FadeIn from "../style/FadeIn";
import Button from "../utils/Button";
import FancyLink from "../style/FancyLink";

const NavLinks = ({ isMobile = false }) => {
    const sections = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
        { name: 'Resume', href: '/Pongsatorn\'s Resume.pdf' }
    ]

    return (
        <div
            className={`${isMobile ? 'flex flex-col space-y-2' : 'hidden md:flex items-center space-x-8'}
        `}
        >
            {sections.map((section, index) => (
                <FadeIn key={index} delay={index * 300} duration={300}>
                    {
                        section.name != 'Resume'
                            ? <a href={section.href}>
                                <span className="text-accent text-sm font-mono">
                                    0{index + 1}.
                                </span>
                                <FancyLink className={'text-sm font-mono text-accent hover:text-neutral transition-colors duration-300'}>
                                    {section.name}
                                </FancyLink>
                            </a>
                            : <a href="/Pongsatorn's Resume.pdf" target="_blank" rel="noopener noreferrer">
                                <Button className={'text-sm py-3 px-4 border rounded-md'}>Resume</Button>
                            </a>
                    }
                </FadeIn>
            )
            )}
        </div>
    );
}

export default NavLinks