export const showcaseProjects = [
    {
        header: {
            title: "Web Project Showcase 1",
            subtitle: "A comprehensive overview of the MERN stack application I built.",
        },
        overview: {
            title: "Project Overview",
            description: "This project is a real-time system monitoring dashboard that provides live insights into CPU, memory, disk, and network usage. It's designed to be a powerful tool for developers and system administrators.",
            role: "Full-Stack Developer",
            features: [
                "Real-time data updates with WebSockets",
                "Interactive charts and graphs",
                "Responsive design for all devices",
                "Theming with light and dark modes",
            ],
            links: {
                live: "#",
                source: "#",
            },
        },
        backend: {
            title: "Back-end",
            summary: "The back-end is a Node.js application using Express.js to provide a RESTful API. It uses `systeminformation` to gather system data and `Socket.io` to push real-time updates to the client.",
            database: {
                title: "Database Diagram",
                description: "NoSQL - Real-time data, no persistent storage",
            },
            techStack: ["Node.js", "Express.js", "Socket.io", "systeminformation"],
        },
        frontend: {
            title: "Front-end",
            techStack: ["React", "Vite", "Tailwind CSS", "Recharts"],
            screenshots: {
                title: "Page Screenshots",
                images: Array(6).fill({}),
            },
        },
        challenges: {
            title: "Challenges & Solutions",
            description: "One challenge was efficiently handling real-time data updates without overwhelming the client. I implemented a solution using `use-debounce` to control the frequency of updates and `Zustand` for efficient state management, ensuring a smooth user experience even with high-frequency data streams.",
        },
    },
    {
        header: {
            title: "Web Project Showcase 2",
            subtitle: "A new project with different data.",
        },
        overview: {
            title: "Project Overview 2",
            description: "This is a different project with new features and a different role.",
            role: "Lead Developer",
            features: [
                "Feature A",
                "Feature B",
                "Feature C",
            ],
            links: {
                live: "#",
                source: "#",
            },
        },
        backend: {
            title: "Back-end",
            summary: "This project uses a different back-end stack.",
            database: {
                title: "Database Schema",
                description: "PostgreSQL - Relational data with a focus on performance.",
            },
            techStack: ["Python", "Django", "PostgreSQL"],
        },
        frontend: {
            title: "Front-end",
            techStack: ["Vue.js", "Nuxt.js", "SCSS"],
            screenshots: {
                title: "UI Mockups",
                images: Array(3).fill({}),
            },
        },
        challenges: {
            title: "Challenges & Solutions",
            description: "The main challenge was integrating a legacy API, which was solved by creating a proxy server.",
        },
    },
];