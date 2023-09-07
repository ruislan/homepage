'use-client';

import clsx from 'clsx';
import { Git, JavaScript, Kotlin, MongoDB, NextJS, React, NodeJS, Rust, Vite, SQLite, Spring, Java, Redis, Prisma, Fastify, Docker, MySQL, RabbitMQ } from './icons';

function Icon({ title }) {
    let icon = null;
    switch (title) {
        case 'Java': icon = <Java />; break;
        case 'Kotlin': icon = <Kotlin />; break;
        case 'Spring': icon = <Spring />; break;
        case 'Rust': icon = <Rust />; break;
        case 'JavaScript': icon = <JavaScript />; break;
        case 'NodeJS': icon = <NodeJS />; break;
        case 'NextJS': icon = <NextJS />; break;
        case 'Fastify': icon = <Fastify />; break;
        case 'Prisma': icon = <Prisma />; break;
        case 'React': icon = <React />; break;
        case 'Vite': icon = <Vite />; break;
        case 'Git': icon = <Git />; break;
        case 'MongoDB': icon = <MongoDB />; break;
        case 'MySQL': icon = <MySQL />; break;
        case 'SQLite': icon = <SQLite />; break;
        case 'Redis': icon = <Redis />; break;
        case 'RabbitMQ': icon = <RabbitMQ />; break;
        case 'Docker': icon = <Docker />; break;
        default: break;
    }
    if (!icon) return null;
    return <div className='w-5 h-5'>{icon}</div>;
}

function getQualityColor(quality) {
    switch (quality) {
        case 5: return 'hover:drop-shadow-[0_0_16px_rgb(255,0,0)]';
        case 4: return 'hover:drop-shadow-[0_0_16px_rgb(255,215,0)]';
        case 3: return 'hover:drop-shadow-[0_0_16px_rgb(218,112,214)]';
        case 2: return 'hover:drop-shadow-[0_0_16px_rgb(135,206,250)]';
        case 1: return 'hover:drop-shadow-[0_0_16px_rgb(144,238,144)]';
        default: return 'hover:drop-shadow-[0_0_16px_rgb(255,255,255)]';
    }
}

export default function SkillCard({ skill }) {
    return (
        <div className={clsx('cursor-pointer border border-neutral-700 bg-neutral-800',
            'rounded-lg flex items-center p-2 py-1 gap-1 hover:border-neutral-600',
            `hover:animate-wave hover:backdrop-blur-sm ${getQualityColor(skill.quality)}`)}>
            <span style={{ color: skill.color }}><Icon title={skill.title} /></span>
            <span className='text-neutral-300'>{skill.title}</span>
        </div>
    );
}
