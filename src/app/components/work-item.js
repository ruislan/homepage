
// should be presented as a card
export default function WorkItem({ work, endEnhancer, }) {
    return (
        <a href={`/works/${work.slug}`}
            className='border border-neutral-700 bg-neutral-800 rounded flex items-center px-3 py-4 gap-4'>
            <div className='w-12 h-12'><img src={work.logo} className='rounded w-full h-full' /></div>
            <div className='flex-1 flex items-center justify-between'>
                <div className='flex flex-col'>
                    <p className='font-bold text-neutral-100'>{work.title}</p>
                    <p className='text-neutral-600 dark:text-neutral-400'>
                        {`${Number(work.likes || 0).toLocaleString()} Stars`}
                    </p>
                </div>
                {endEnhancer}
            </div>
        </a>
    );
}
