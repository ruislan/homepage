import Tag from './tag';
import VersionState from './version-state';

export default function ProjectCard({ project }) {
    return (
        <a href={`/projects/${project.slug}`}
            className='border border-neutral-700 bg-neutral-800 rounded flex flex-col hover:border-neutral-600 shadow transition-all duration-300'>
            <div className='w-full h-40 rounded'>
                <img src={project.cover} className='rounded w-full h-full' />
            </div>
            <div className='flex flex-col py-4 px-3 w-full'>
                <div className='flex items-center mb-1 gap-2'>
                    <span className='font-bold text-neutral-100'>{project.title}</span>
                    {project?.versions?.length > 0 && (<VersionState key={project.versions[0].label} label={project.versions[0].label} state={project.versions[0].state} />)}
                </div>
                <p className='line-clamp-2  h-10 text-sm text-neutral-600 dark:text-neutral-400'>{project.summary}</p>
            </div>
            <div className='flex w-full flex-wrap overflow-hidden pl-3 pr-3 pb-3 gap-2'>
                {project.tags?.map(tag => <Tag key={tag.name}>{tag.name}</Tag>)}
            </div>
        </a>
    );
}
