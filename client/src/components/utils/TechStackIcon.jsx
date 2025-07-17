import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiMysql, SiTypescript, SiPrisma, SiCloudflare, SiPostman } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const iconMap = {
    html5: FaHtml5,
    css3: FaCss3Alt,
    js: FaJs,
    react: FaReact,
    nextjs2: SiNextdotjs,
    nodejs: FaNodeJs,
    expressjs: SiExpress,
    mysql: SiMysql,
    git: FaGitAlt,
    github: FaGithub,
    typescript: SiTypescript,
    prisma: SiPrisma,
    cloudflare: SiCloudflare,
    vscode: VscCode,
    postman: SiPostman,
};

const TechStackIcon = ({ name, size = 27 }) => {
    const IconComponent = iconMap[name];

    if (!IconComponent) {
        return null; // Or a placeholder icon
    }

    return (
        <div style={{ width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <IconComponent size={size} />
        </div>
    );
};

export default TechStackIcon;