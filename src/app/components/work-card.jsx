import Tag from './tag';

const color = '#333'
export default function WorkCard({ work }) {
    return (
        <a href={`/works/${work.slug}`}
            className='border border-neutral-700 bg-neutral-800 rounded flex flex-col hover:border-neutral-600 shadow transition-all duration-300'>
            <div className='w-full h-40 rounded'>
                <img src={work.cover} className='rounded w-full h-full' />
            </div>
            <div className='flex flex-col py-4 px-3 w-full'>
                <span className='font-bold text-neutral-100'>{work.title}</span>
                <p className='line-clamp-3  h-16 text-sm text-neutral-600 dark:text-neutral-400'>{work.summary}</p>
            </div>
            <div className='flex w-full flex-wrap overflow-hidden pl-3 pr-3 pb-3 gap-2'>
                {work.tags?.map(tag => <Tag key={tag.name}>{tag.name}</Tag>)}
            </div>
        </a>
    );
}
