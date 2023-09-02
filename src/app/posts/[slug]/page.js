import { revalidatePath } from 'next/cache';

import Paragraph from '@/app/components/paragraph';
import database from '@/lib/database';

export default async function PostPage({ params }) {
    const post = await database.Post.getPost(params.slug);
    if (!post) return 'Not Found';
    await database.Post.incrementViews(params.slug);
    revalidatePath('/posts'); // refresh /posts cache

    return (
        <div className='flex flex-col box-border'>
            <h1 className='font-bold text-2xl'>{post.title}</h1>
            <div className="flex justify-between items-center mt-2 mb-2 text-sm">
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {post.date}
                </p>
                <p className='text-sm text-neutral-600 dark:text-neutral-400'>
                    {`${Number(post.views || 0).toLocaleString()} 次浏览`}
                </p>
            </div>
            <Paragraph dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
    );
}