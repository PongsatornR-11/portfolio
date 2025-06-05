
export default function NavLinks({ isMobile = false }) {
    const sections = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <div
            className={`${isMobile ? 'flex flex-col space-y-2' : 'hidden md:flex space-x-6'}
        `}
        >
            {sections.map((section, index) => (
                <a href={section.href}>
                    <div key={index}
                        className='p-1 font-mono text-[#64ffda] hover:text-[#64ffda] transition duration-300 ease-in-out hover:-translate-1 hover:shadow-[4px_4px_1px_rgba(100,255,218,1)]'
                    >
                        <span>
                            {index + 1}.
                        </span>
                        {section.name}
                    </div>
                </a>
            )
            )}
        </div>
    );
}
