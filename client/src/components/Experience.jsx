import React, { useState, useRef, useEffect } from 'react'



const workExperience = {
    UTAC: {
        title: 'Equipment Engineer @ UTAC Thai Limited',
        date: '2023 - Present',
        bullets: [
            'Optimized laser marking machines to reduce downtime and improve UPH.',
            'Managed machine tooling and maintained a PHP-based tooling system.',
            'Performed preventive maintenance on critical equipment.',
            'Troubleshot sensor, sequence, and design issues in automated machines.',
            'Collaborated with teams to meet customer needs and enhance performance.',
        ],
    },
    'Cal-Comp': {
        title: 'Production Engineer @ Cal-Comp Electronics',
        date: '2021-2023',
        bullets: [
            'Investigated PCBA quality issues post-SMT, reflow, THT insertion, and wave soldering.',
            'Applied analytical skills to identify root causes and implement corrective actions.',
            'Gained insight into complex manufacturing workflows, applicable to software development.',
        ],
    },
};


const Experience = () => {

    const [activeTab, setActiveTab] = useState('UTAC');
    const tabRefs = useRef({});
    const [sliderStyle, setSliderStyle] = useState({ top: 0, height: 0 });

    useEffect(() => {
        const activeTabElement = tabRefs.current[activeTab];
        if (activeTabElement) {
            setSliderStyle({
                top: activeTabElement.offsetTop,
                height: activeTabElement.offsetHeight,
            });
        }
    }, [activeTab]);

    return (
        <section className="md:mx-14 mx-8 my-20">
            <div className='max-w-5xl mx-auto text-left text-accent py-4 px-6 sm:px-4 lg:px-10'>

                <div className='flex items-center space-x-8 mb-6'>
                    <h2 className="text-secondary text-2xl font-mono">02. <span className='text-accent font-semibold'>Work Experiences</span></h2>
                    <div className='h-px w-40 border'></div>
                </div>

                <div className="grid grid-cols-5 max-w-4xl mx-auto mt-10">
                    {/* Tabs */}
                    <div className="relative col-span-1 border-l-2 border-neutral">
                        <div
                            className="absolute left-[-2px] w-[2px] bg-secondary transition-all duration-300 ease-in-out"
                            style={{
                                top: sliderStyle.top,
                                height: sliderStyle.height,
                            }}
                        ></div>
                        {Object.keys(workExperience).map((company) => (
                            <button
                                key={company}
                                ref={(el) => (tabRefs.current[company] = el)}
                                onClick={() => setActiveTab(company)}
                                className={`block w-full text-left px-4 py-2 font-medium 
                                ${activeTab === company
                                        ? 'text-secondary'
                                        : 'text-accent hover:bg-secondary/25 backdrop-blur-md'
                                    }`}
                            >
                                {company}
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="col-span-4 p-6">
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