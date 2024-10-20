import SkillCard from './skill-card';

export default function SkillLayer({ layer }) {
    return (
        <div className='flex w-full justify-between gap-3'>
            {layer.map((group, i) => (
                <div key={i} className='p-3 border border-neutral-700 bg-neutral-800 rounded w-full'>
                    <h3 className='text-sm font-bold text-gray-400 mb-3'>{group.title}</h3>
                    <div className='flex flex-wrap gap-2 w-full'>
                        {group.items.map(skill => <SkillCard key={skill.title} skill={skill} />)}
                    </div>
                </div>
            ))}
        </div>
    );
}
