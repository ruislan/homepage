import prisma from '@/lib/prisma';
import PostItem from '../components/post-item';

export const metadata = {
    title: '博客',
    description: '分享我在编码、研发、架构、设计、管理、娱乐、健身等各个方面的所思所想所学',
};

async function getAllPosts() {
    const posts = await prisma.blogPost.findMany({
        select: { title: true, summary: true, slug: true, viewCount: true, createdAt: true },
        orderBy: { createdAt: 'desc', }
    });
    return posts;
}

export default async function PostsPage() {
    const posts = await getAllPosts();
    return (
        <div>
            <h1 className='font-bold text-2xl mb-8'>我的博客</h1>

            <div className='flex flex-col'>
                {posts.map((post) => <PostItem key={post.slug} post={post} />)}
            </div>
        </div>
    );
}