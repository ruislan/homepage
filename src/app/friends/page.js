import clsx from 'clsx';
import Link from 'next/link';

export const metadata = {
    title: '朋友',
    description: '朋友多了路好走，三人行必有我师',
};

export default async function FriendsPage() {
    return (
        <div className='mb-8'>
            <h1 className='font-bold text-2xl mb-8'>我的朋友们</h1>
            <div className='text-gray-300 mb-8'>三人行，必有我师，朋友多了路好走，感谢我生命中出现的每个朋友，🙏🫡。</div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-2'>
                <a
                    href='https://www.kylinwit.com'
                    target='_blank'
                    className={clsx(
                        'border border-neutral-700 bg-neutral-800 rounded',
                        'flex p-1.5 hover:border-neutral-600 max-w-full w-full',
                        'shadow transition-all duration-300'
                    )}
                >
                    <div className='flex items-center gap-2'>
                        <img
                            className='h-16 w-auto max-h-16 rounded'
                            src={'images/friends/sr.jpeg'}
                            width={64}
                            height={64}
                            alt={'山瑞师兄'}
                        />
                        <div className='flex flex-col gap-2'>
                            <span className='text-gray-200 font-semibold text-base'>山瑞师兄</span>
                            <span className='text-gray-400 text-sm'>经典中医传播者</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}