
// should be presented as a card
export default function WorkCard({ work }) {
    return (
        <a href={`/works/${work.slug}`}
            className='border border-neutral-700 bg-neutral-800 rounded flex flex-col items-center'>
            <div className='w-full h-36 rounded'>
                <img src={work.cover} className='rounded w-full h-full' />
            </div>
            <div className='flex flex-col py-4 px-3 w-full'>
                <span className='font-bold text-neutral-100'>{work.title}</span>
                <p className='text-neutral-600 dark:text-neutral-400'>{work.summary}</p>
                {/* <p className='text-neutral-600 dark:text-neutral-400'>
                    {`${Number(work.likes || 0).toLocaleString()} Stars`}
                </p> */}
            </div>
        </a>
    );
}