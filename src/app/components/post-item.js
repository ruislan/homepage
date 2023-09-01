export default function PostItem({ post, endEnhancer, }) {
    return (
        <a href={`/posts/${post.slug}`}
            className='border border-neutral-700 bg-neutral-800 rounded flex items-center justify-between px-3 py-4'>
            <div className='flex flex-col'>
                <p className='font-bold text-neutral-100'>
                    {post.title}
                </p>
                <p className='text-neutral-600 dark:text-neutral-400'>
                    {`${Number(post.viewCount || 0).toLocaleString()} 次浏览`}
                </p>
            </div>
            {endEnhancer}
        </a>
    );
}
