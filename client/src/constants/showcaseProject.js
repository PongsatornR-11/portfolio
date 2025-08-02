export const showcaseProjects = [
    {
        id: "ecommerce-shopping-website",
        header: {
            title: "Ecommerce Shopping Website",
            subtitle: "A full-stack e-commerce platform built with the MERN stack.",
        },
        overview: {
            title: "Project Overview",
            description: "A comprehensive e-commerce shopping website enabling users to browse products, add to cart, and complete purchases. It features an admin panel for product and category management.",
            role: "Full-Stack Developer",
            features: [
                "User authentication and authorization",
                "Product browsing and search",
                "Shopping cart functionality",
                "Order management for users and admins",
                "Admin panel for product and category CRUD operations",
                "Image uploads with Cloudinary",
                "Payment integration",
            ],
            links: {
                live: "https://ecom.mypiserviceshub.com/",
                source: "https://github.com/PongsatornR-11/Ecommerce",
            },
        },
        backend: {
            title: "Back-end",
            summary: "The back-end is built with Node.js and Express.js, providing RESTful APIs for product, user, order, and category management. It uses Prisma as an ORM for MySQL and Cloudinary for image storage.",
            database: {
                title: "Database Schema",
                description: "MySQL with Prisma ORM",
                image: "/projectPics/ecommerce/Database Ecommerce Project.jpg"
            },
            techStack: ["Node.js", "Express.js", "MySQL", "Prisma", "Cloudinary"],
        },
        frontend: {
            title: "Front-end",
            techStack: ["React", "Vite", "Tailwind CSS"],
            screenshots: {
                title: "Page Screenshots",
                images: [
                    { src: "/projectPics/ecommerce/Screenshot Ecommerce Project.jpg" },
                    { src: "/projectPics/ecommerce/Screenshot Ecommerce Project_2.jpg" },
                    { src: "/projectPics/ecommerce/Screenshot Ecommerce Project_3.jpg" }
                ],
            },
        },
        challenges: {
            title: "Challenges & Solutions",
            description: "One challenge was implementing secure user authentication and authorization, which was solved using JWTs and middleware. Another was handling image uploads efficiently, addressed by integrating Cloudinary for storage and delivery.",
        },
    },
    {
        id: "system-monitor",
        header: {
            title: "System Monitor",
            subtitle: "A real-time system monitoring application for my Raspberry Pi.",
        },
        overview: {
            title: "Project Overview",
            description: "A full-stack application that provides a web-based interface to monitor the system resource usage of a Raspberry Pi in real-time. It displays detailed information about CPU, memory, and network, with interactive charts and a clean, modern UI.",
            role: "Full-Stack Developer",
            features: [
                "Real-time CPU load and temperature monitoring",
                "Individual CPU core usage tracking",
                "Memory usage statistics",
                "Network connection and traffic details",
                "Interactive charts with historical data",
                "Responsive design for various screen sizes",
            ],
            links: {
                live: "https://sysmonitor.mypiserviceshub.com/",
                source: "https://github.com/PongsatornR-11/sysmonitor",
            },
        },
        backend: {
            title: "Back-end",
            summary: "The back-end is a Node.js application using Express.js to create a RESTful API. It uses the 'systeminformation' library to gather real-time system data and serves it to the front-end.",
            database: {
                title: "Database",
                description: "No database is used in this project. All data is collected and streamed in real-time.",
            },
            techStack: ["Node.js", "Express.js", "SystemInformation"],
        },
        frontend: {
            title: "Front-end",
            techStack: ["React", "Vite", "Tailwind CSS", "Recharts"],
            screenshots: {
                title: "Page Screenshots",
                images: [
                    { src: "/projectPics/system_monitor/Screenshot Systemmonitor Project.jpg" },
                    { src: "/projectPics/system_monitor/Screenshot Systemmonitor Project_2.jpg" },
                    { src: "/projectPics/system_monitor/Screenshot Systemmonitor Project_3.jpg" },
                    { src: "/projectPics/system_monitor/Screenshot Systemmonitor Project_4.jpg" },
                    { src: "/projectPics/system_monitor/Screenshot Systemmonitor Project_5.jpg" },
                    { src: "/projectPics/system_monitor/Screenshot Systemmonitor Project_6.jpg" },
                ],
            },
        },
        challenges: {
            title: "Challenges & Solutions",
            description: "A key challenge was to efficiently stream real-time data from the server to the client without causing performance issues. This was solved by using a combination of setInterval on the client-side to fetch data periodically and optimizing the back-end to quickly respond with the latest system information. Another challenge was to visualize the data in a clear and interactive way, which was achieved using the Recharts library.",
        },
    },
    {
        id: "camping-website",
        header: {
            title: "Camping Website",
            subtitle: "A web application for discovering and managing camping locations in Thailand.",
        },
        overview: {
            title: "Project Overview",
            description: "This full-stack application allows users to discover, share, and manage camping locations across Thailand. It provides a platform for camping enthusiasts to find new spots, view details, and contribute to the community by adding their own favorite locations. The application features secure user authentication, interactive maps, and a clean, responsive interface for a seamless user experience.",
            role: "Full-Stack Developer",
            features: [
                "Secure user authentication with Clerk (sign-up, sign-in)",
                "Browse, search, and filter camping locations",
                "Interactive map view of all camping spots using Leaflet",
                "Detailed location pages with images, descriptions, and pricing",
                "Users can create, update, and manage their own camping location listings",
                "Save favorite camping locations",
                "Categorization of locations by type (e.g., mountain, beach) and province",
                "Image uploads to Supabase storage"
            ],
            links: {
                live: "https://github.com/PongsatornR-11/camping",
                source: "https://github.com/PongsatornR-11/camping",
            },
        },
        backend: {
            title: "Back-end",
            summary: "The back-end is built with Next.js API routes and leverages Prisma as the ORM for a PostgreSQL database. It handles all business logic, including user authentication with Clerk, CRUD operations for camping locations, and file uploads to Supabase storage. Server Actions are used for form submissions and data mutations.",
            database: {
                title: "Database",
                description: "PostgreSQL with Prisma ORM",
                image: "/projectPics/camping/Database Camping Project.jpg"
            },
            techStack: ["Next.js", "Prisma", "PostgreSQL", "Clerk", "Supabase"],
        },
        frontend: {
            title: "Front-end",
            techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Leaflet"],
            screenshots: {
                title: "Page Screenshots",
                images: [
                    { src: "/projectPics/camping/Screenshot camping Project.jpg" },
                    { src: "/projectPics/camping/Screenshot camping Project_2.jpg" },
                    { src: "/projectPics/camping/Screenshot camping Project_3.jpg" },
                    { src: "/projectPics/camping/Screenshot camping Project_4.jpg" },
                ],
            },
        },
        challenges: {
            title: "Challenges & Solutions",
            description: "A primary challenge was integrating multiple services (Clerk for authentication, Supabase for storage, and a PostgreSQL database with Prisma) into a cohesive back-end. This was overcome by carefully managing environment variables and creating dedicated utility modules for each service. Another challenge was implementing the interactive map with Leaflet, which required creating a custom component to handle dynamic location markers and popups.",
        },
    }
];