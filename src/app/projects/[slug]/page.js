import { Github, Window } from '@/app/components/icons';
import Paragraph from '@/app/components/paragraph';
import Tag from '@/app/components/tag';
import VersionState from '@/app/components/version-state';
import database from '@/lib/database';

export default async function Page({ params }) {
    const project = await database.Project.getProject(params.slug);
    if (!project) return 'Not Found';
    return (
        <div className='flex flex-col box-border'>
            <div className='flex items-center gap-4'>
                <h1 className='inline break-words font-bold text-2xl'>{project.title}</h1>
                <div className='flex items-center gap-2'>
                    {project.versions?.slice(0, 2).map(v => <VersionState key={v.label} label={v.label} state={v.state} />)}
                </div>
            </div>
            <div className='flex justify-between items-center my-2 text-sm'>
                <p className='text-sm text-gray-200'>
                    {project.date}
                </p>
                <div className='flex space-x-2'>
                    {project.demo && <a className='flex items-center space-x-2' href={project.demo}>
                        <span className='w-6 h-6 fill-neutral-200' title='demo'><Window /></span>
                    </a>}
                    <a className='flex items-center space-x-2' href={project.github}>
                        <span className='w-6 h-6 fill-neutral-200' title='github'><Github /></span>
                    </a>
                </div>
            </div>
            <div className='flex flex-warp my-2 gap-2'>
                {project.tags?.map(tag => (<Tag key={tag.name}>{tag.name}</Tag>))}
            </div>
            <Paragraph dangerouslySetInnerHTML={{ __html: project.content }} />
        </div>
    );
}