import { Calendar, Eye } from "./icons";

export default function PostCard({ post, endEnhancer, }) {
    return (
        <a href={`/posts/${post.slug}`}
            className='border border-neutral-700 bg-neutral-800 rounded flex items-center justify-between px-3 py-4 hover:border-neutral-600 shadow transition-all duration-300'>
            <div className='flex flex-col gap-1'>
                <span className='font-bold text-gray-100'>
                    {post.title}
                </span>
                <div className='flex items-center gap-4 text-gray-400 text-sm'>
                    <div className='flex items-center gap-1 fill-neutral-400'>
                        <span className='w-4 h-4'><Calendar /></span>
                        <span>{post.date}</span>
                    </div>
                    <div className='flex items-center gap-1 fill-neutral-400'>
                        <span className='w-4 h-4'><Eye /></span>
                        <span>{`${Number(post.views || 0).toLocaleString()}`}</span>
                    </div>
                </div>
            </div>
            {endEnhancer}
        </a>
    );
}
