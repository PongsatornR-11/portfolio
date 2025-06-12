
import React from "react";
import FadeIn from "../style/FadeIn";
import Button from "../utils/Button";

const NavLinks = ({ isMobile = false }) => {
    const sections = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
        { name: 'Resume' }
    ]

    return (
        <div
            className={`${isMobile ? 'flex flex-col space-y-2' : 'hidden md:flex items-center space-x-6'}
        `}
        >
            {sections.map((section, index) => (
                <FadeIn key={index} delay={index * 300} duration={300}>
                    {
                        section.name != 'Resume' ?
                            <a href={section.href}>
                                <div key={index}
                                    className='p-1 font-mono text-accent rounded-md 
                            hover:text-secondary transition duration-300 ease-out hover:-translate-1 hover:shadow-[4px_4px_1px_rgba(100,255,218,1)]'
                                >
                                    <span className="text-accent">
                                        0{index + 1}.
                                    </span>
                                    {section.name}
                                </div>
                            </a>
                        : <Button>Resume</Button>
                    }
                </FadeIn>
            )
            )}
        </div>
    );
}

export default NavLinks