import React, { useState } from 'react'



const workExperience = {
    Upstatement: {
        title: 'Lead Engineer @ Upstatement',
        date: 'May 2018 – Present',
        bullets: [
            'Deliver high-quality, robust production code.',
            'Lead research and architecture of technical solutions.',
            'Collaborate with designers and project managers.',
            'Provide mentorship and leadership within the team.',
        ],
    },
    Apple: {
        title: 'UI Engineer Co-op @ Apple',
        date: 'July – December 2017',
        bullets: [
            'Developed interactive web apps for Apple Music.',
            'Built Apple Music Extension for Facebook Messenger.',
            'Implemented Apple Music’s embeddable web player.',
            'Contributed to MusicKit JS SDK.',
        ],
    },
    ScoutStudio: {
        title: 'Frontend Developer @ Scout Studio',
        date: 'January – June 2017',
        bullets: [
            'Designed and developed responsive websites for student-led initiatives.',
            'Worked closely with designers to translate mockups into functional interfaces.',
            'Implemented animations and transitions for enhanced UX.',
            'Participated in weekly design critiques and code reviews.',
        ],
    },
    Starry: {
        title: 'Software Engineering Intern @ Starry',
        date: 'Summer 2016',
        bullets: [
            'Built internal tools to support customer service operations.',
            'Integrated APIs to streamline data collection and reporting.',
            'Wrote unit and integration tests to ensure code reliability.',
            'Collaborated with product managers to define feature requirements.',
        ],
    },
    MullenLowe: {
        title: 'Web Developer Intern @ MullenLowe',
        date: 'Fall 2015',
        bullets: [
            'Assisted in building marketing microsites for major campaigns.',
            'Maintained and updated client websites using CMS platforms.',
            'Optimized assets and scripts for performance.',
            'Learned agile development practices in a fast-paced agency environment.',
        ],
    },
};


const Experience = () => {

    const [activeTab, setActiveTab] = useState('Apple');

    return (
        <section className="md:mx-14 mx-8 my-20">
            <div className='max-w-5xl mx-auto text-left text-accent py-4 px-6 sm:px-4 lg:px-10'>

                <div className='flex items-center space-x-8 mb-6'>
                    <h2 className="text-secondary text-2xl font-mono">02. <span className='text-accent font-semibold'>Work Experiences</span></h2>
                    <div className='h-px w-40 border'></div>
                </div>

                <div className="flex max-w-4xl mx-auto mt-10">
                    {/* Tabs */}
                    <div className="w-1/5">
                        {Object.keys(workExperience).map((company) => (
                            <button
                                key={company}
                                onClick={() => setActiveTab(company)}
                                className={`block w-full text-left px-4 py-2 font-medium 
                            ${activeTab === company
                                        ? 'border-l-2 text-secondary'
                                        : 'border-l-2 border-neutral hover:bg-secondary/25 backdrop-blur-md text-accent'
                                    }`}
                            >
                                {company}
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="w-4/5 p-6">
                        <h3 className="text-xl font-semibold text-accent">{workExperience[activeTab].title}</h3>
                        <p className="text-sm text-accent mb-4">{workExperience[activeTab].date}</p>
                        <ul className="list-disc list-inside space-y-2 text-accent">
                            {workExperience[activeTab].bullets.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience