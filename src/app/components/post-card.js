export default function PostCard({ post, endEnhancer, }) {
    return (
        <a href={`/posts/${post.slug}`}
            className='border border-neutral-700 bg-neutral-800 rounded flex items-center justify-between px-3 py-4'>
            <div className='flex flex-col gap-1'>
                <span className='font-bold text-neutral-100'>
                    {post.title}
                </span>
                <div className='flex items-center gap-4 text-neutral-400 text-sm'>
                    <div className='flex items-center gap-1 fill-neutral-400'>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='h-4 w-4'><path d='M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z'></path></svg>
                        <span>{post.date}</span>
                    </div>
                    <div className='flex items-center gap-1 fill-neutral-400'>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='h-4 w-4'><path d='M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z'></path></svg>
                        <span>{`${Number(post.views || 0).toLocaleString()}`}</span>
                    </div>
                </div>
            </div>
            {endEnhancer}
        </a>
    );
}
