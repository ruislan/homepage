import { Github, Window } from '@/app/components/icons';
import Paragraph from '@/app/components/paragraph';
import Tag from '@/app/components/tag';
import database from '@/lib/database';

export default async function WorksPage({ params }) {
    const work = await database.Work.getWork(params.slug);
    if (!work) return 'Not Found';
    return (
        <div className='flex flex-col box-border'>
            <h1 className='inline break-words font-bold text-2xl'>{work.title}</h1>
            <div className='flex justify-between items-center my-2 text-sm'>
                <p className='text-sm text-neutral-200'>
                    {work.date}
                </p>
                <div className='flex space-x-2'>
                    {work.demo && <a className='flex items-center space-x-2' href={work.demo}>
                        <span className='w-6 h-6 fill-neutral-200' title='demo'><Window /></span>
                    </a>}
                    <a className='flex items-center space-x-2' href={work.github}>
                        <span className='w-6 h-6 fill-neutral-200' title='github'><Github /></span>
                    </a>
                </div>
            </div>
            <div className='flex flex-warp my-2 gap-2'>
                {work.tags?.map(tag => (<Tag key={tag.name} name={tag.name} color={tag.color} />))}
            </div>
            <Paragraph dangerouslySetInnerHTML={{ __html: work.content }} />
        </div>
    );
}