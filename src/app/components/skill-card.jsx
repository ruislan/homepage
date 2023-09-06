'use-client';

import { Git, JavaScript, Kotlin, MongoDB, NextJS, React, NodeJS } from './icons';

function Icon({ title }) {
    let icon = null;
    switch (title) {
        case 'JavaScript': icon = <JavaScript />; break;
        case 'Kotlin': icon = <Kotlin />; break;
        case 'NextJS': icon = <NextJS />; break;
        case 'React': icon = <React />; break;
        case 'Git': icon = <Git />; break;
        case 'NodeJS': icon = <NodeJS />; break;
        case 'MongoDB': icon = <MongoDB />; break;
        default: break;
    }
    if (!icon) return null;
    return <div className='w-5 h-5'>{icon}</div>;
}

export default function SkillCard({ skill }) {
    return (
        <div className='cursor-pointer border border-neutral-700 bg-neutral-800 rounded flex items-center p-1 gap-1 hover:border-neutral-600 shadow transition-all duration-300'>
            <Icon title={skill.title} />
            <span>{skill.title}</span>
        </div>
    );
}
