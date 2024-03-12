
import ReactMarkdown from 'react-markdown';
import Paragraph from '@/app/components/paragraph';
import database from '@/lib/database';
import { revalidatePath, revalidateTag } from 'next/cache';

async function getPost({ slug }) {
    const post = await database.Post.getPost(slug);
    if (!post) return null;
    await database.Post.incrementViews(slug);
    revalidatePath('/posts', 'page');
    revalidatePath('/', 'page');
    return post;
}

export default async function PostPage({ params }) {
    const post = await getPost({ slug: params.slug });

    return (
        <div className='flex flex-col box-border'>
            <h1 className='font-bold text-2xl'>{post.title}</h1>
            <h3 className='mt-4 text-default italic text-gray-300'>{post.summary}</h3>
            <div className='flex justify-between items-center mt-4 text-sm'>
                <p className='text-sm text-gray-400'>
                    {post.date}
                </p>
                <p className='text-sm text-gray-400'>
                    {`${Number(post.views || 0).toLocaleString()} 次浏览`}
                </p>
            </div>
            <div className='my-6'>
                <img className='w-full h-auto rounded-lg object-cover object-center aspect-[2/1]' src={post.hero} />
            </div>
            {post.type === 'md' ? <Paragraph><ReactMarkdown>{post.content}</ReactMarkdown></Paragraph> : <Paragraph dangerouslySetInnerHTML={{ __html: post.content }} />}
        </div>
    );
}