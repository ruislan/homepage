import { notFound } from 'next/navigation';

import Paragraph from '@/app/components/paragraph';
import database from '@/lib/database';

export default async function PostsPage({ params }) {
    const work = await database.Work.getWork(params.slug);
    if (!work) notFound();
    return (
        <div className='flex flex-col box-border'>
            <h1 className='font-bold text-2xl'>{work.title}</h1>
            <div className="flex justify-between items-center mt-2 mb-2 text-sm">
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {work.date}
                </p>
                <p className='text-sm text-neutral-600 dark:text-neutral-400'>
                    {`${Number(work.stars || 0).toLocaleString()} stars`}
                </p>
                {/* screenshots */}
            </div>
            <Paragraph>
                {work.content}
            </Paragraph>
        </div>
    );
}