export const showcaseProjects = [
    {
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
                live: "https://ecommerce-pongsatorn.vercel.app/",
                source: "https://github.com/PongsatornR-11/Ecommerce",
            },
        },
        backend: {
            title: "Back-end",
            summary: "The back-end is built with Node.js and Express.js, providing RESTful APIs for product, user, order, and category management. It uses Prisma as an ORM for MySQL and Cloudinary for image storage.",
            database: {
                title: "Database",
                description: "MySQL with Prisma ORM",
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