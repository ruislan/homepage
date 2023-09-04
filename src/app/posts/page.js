
import PostCard from '../components/post-card';
import database from '@/lib/database';

export const metadata = {
    title: '博客',
    description: '分享我在编码、研发、架构、设计、管理、娱乐、健身等各个方面的所思所想所学',
};

export default async function PostsPage() {
    const posts = await database.Post.getPosts();
    return (
        <div>
            <h1 className='font-bold text-2xl mb-8'>我的博客</h1>

            <div className='flex flex-col gap-4'>
                {posts.map((post) => <PostCard key={post.slug} post={post} />)}
            </div>
        </div>
    );
}