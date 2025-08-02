export const ProjectList = [
    {
        type: 'right',
        data: {
            id: "ecommerce-shopping-website",
            title: 'Ecommerce Shopping Website',
            description: 'A full-stack e-commerce platform built with React, Node.js (Express), MySQL (Prisma), and integrated with Cloudinary for image management and Stripe for payments. It features user authentication, product browsing, shopping cart functionality, and an admin panel for product and category management.',
            technologies: ['Node.js (Express)', 'React', 'MySQL', 'Prisma', 'Cloudinary', 'Stripe', 'Tailwind CSS'],
            image: '/projectPics/ecommerce/Screenshot Ecommerce Project.jpg',
            images: [
                { src: '/projectPics/ecommerce/Screenshot Ecommerce Project.jpg' },
                { src: '/projectPics/ecommerce/Screenshot Ecommerce Project_2.jpg' },
                { src: '/projectPics/ecommerce/Screenshot Ecommerce Project_3.jpg' }
            ],
            links: [
                { name: 'git', href: 'https://github.com/PongsatornR-11/Ecommerce' },
                { name: 'website', href: 'https://ecom.mypiserviceshub.com/' }
            ]
        }
    },

    {
        type: 'left',
        data: {
            id: "camping-website",
            title: 'Camping Website',
            description: 'A web application for discovering and managing camping locations in Thailand. Users can browse, search, view details, save their favorite locations, and contribute by adding new ones. Features include user authentication with Clerk, an interactive map view with Leaflet, and detailed location pages with images and descriptions.',
            technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Clerk', 'Supabase', 'Tailwind CSS', 'Shadcn UI', 'Leaflet'],
            image: '/projectPics/camping/Screenshot camping Project.jpg',
            images: [
                { src: '/projectPics/camping/Screenshot camping Project.jpg' },
                { src: '/projectPics/camping/Screenshot camping Project_2.jpg' },
                { src: '/projectPics/camping/Screenshot camping Project_3.jpg' },
                { src: '/projectPics/camping/Screenshot camping Project_4.jpg' },
            ],
            links:
                [
                    { name: 'git', href: 'https://github.com/PongsatornR-11/camping' },
                    { name: 'website', href: 'https://github.com/PongsatornR-11/camping' },
                ]
        }
    },
    {
        type: 'right',
        data: {
            id: "system-monitor",
            title: 'System Monitor for my raspberry Pi',
            description: 'A full-stack application that provides a web-based interface to monitor the system resource usage of a Raspberry Pi in real-time. It displays detailed information about CPU, memory, and network, with interactive charts and a clean, modern UI.',
            technologies: ['React', 'Express.JS', 'SystemInformation', 'Tailwind CSS', 'Cloudflared', 'PM2'],
            image: '/projectPics/system_monitor/Screenshot Systemmonitor Project.jpg',
            images: [
                { src: '/projectPics/system_monitor/Screenshot Systemmonitor Project.jpg' },
                { src: '/projectPics/system_monitor/Screenshot Systemmonitor Project_2.jpg' },
                { src: '/projectPics/system_monitor/Screenshot Systemmonitor Project_3.jpg' },
                { src: '/projectPics/system_monitor/Screenshot Systemmonitor Project_4.jpg' },
                { src: '/projectPics/system_monitor/Screenshot Systemmonitor Project_5.jpg' },
                { src: '/projectPics/system_monitor/Screenshot Systemmonitor Project_6.jpg' },
            ],
            links:
                [
                    { name: 'git', href: 'https://github.com/PongsatornR-11/sysmonitor' },
                    { name: 'website', href: 'https://sysmonitor.mypiserviceshub.com/' },
                ]
        }
    },

]

export const projectGrid = [
    {
        title: 'System Monitor',
        description: 'A system monitor application that displays real-time CPU, memory, and network usage.',
        tags: ['React', 'Tailwind CSS', 'JavaScript'],
        github: '#',
        liveDemo: '#',
        image: '/ProjectPics/Screenshot Systemmonitor Project.jpg'
    },
    {
        title: 'Project 2',
        description: 'A brief description of Project 2.',
        tags: ['Next.js', 'CSS', 'TypeScript'],
        github: '#',
        liveDemo: '#'
    },
    {
        title: 'Project 3',
        description: 'A brief description of Project 3.',
        tags: ['Node.js', 'Express', 'MongoDB'],
        github: '#',
        liveDemo: '#'
    },
    {
        title: 'Project 4',
        description: 'A brief description of Project 4.',
        tags: ['Vue.js', 'Bootstrap', 'JavaScript'],
        github: '#',
        liveDemo: '#'
    },
    {
        title: 'Project 5',
        description: 'A brief description of Project 5.',
        tags: ['Angular', 'Material UI', 'TypeScript'],
        github: '#',
        liveDemo: '#'
    }
]