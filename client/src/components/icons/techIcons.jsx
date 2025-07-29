import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaCode } from 'react-icons/fa';
import { SiExpress, SiTailwindcss, SiVite, SiSocketdotio, SiSystem76, SiMysql, SiPrisma, SiCloudinary, SiNextdotjs, SiClerk, SiSupabase, SiTypescript, SiShadcnui, SiLeaflet } from 'react-icons/si';

export const techIconMap = {
    "Node.js": <FaNodeJs className="text-green-500" />,
    "Express.js": <SiExpress />,
    "Socket.io": <SiSocketdotio className="text-black" />,
    "systeminformation": <SiSystem76 className="text-blue-400" />,
    "React": <FaReact className="text-blue-400" />,
    "Vite": <SiVite className="text-purple-500" />,
    "Tailwind CSS": <SiTailwindcss className="text-teal-400" />,
    "Recharts": <FaCode />,
    "Python": <FaCode />,
    "Django": <FaCode />,
    "PostgreSQL": <FaDatabase />,
    "Vue.js": <FaCode />,
    "Nuxt.js": <FaCode />,
    "SCSS": <FaCode />,
    "MySQL": <SiMysql />,
    "Prisma": <SiPrisma />,
    "Cloudinary": <SiCloudinary />,
    "Next.js": <SiNextdotjs />,
    "Clerk": <SiClerk />,
    "Supabase": <SiSupabase />,
    "TypeScript": <SiTypescript />,
    "Shadcn UI": <SiShadcnui />,
    "Leaflet": <SiLeaflet />,
    "SystemInformation": <SiSystem76 className="text-blue-400" />,
    "Stripe": <FaCode />,
    "Cloudflared": <FaCode />,
    "PM2": <FaCode />,
};
