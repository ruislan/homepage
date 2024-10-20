'use client';

import Image from 'next/image';

export default function UserCard({ abilities }) {
    return (
        <div className='flex flex-col sm:flex-row sm:items-center'>
            <div className='w-32 h-32 p-1 mr-2 shadow-xl bg-neutral-800/80 rounded-lg cursor-pointer'>
                <Image width='128' height='128' className='rounded'
                    loader={_ => `https://api.dicebear.com/7.x/lorelei/svg?seed=Rui&beard[]&earrings[]&eyebrows=variant13&eyes=variant20&glasses=variant03&glassesProbability=100&hair=variant39&head=variant04&mouth=happy02&nose=variant06&size=128`}
                    src='Ruislan'
                    alt='my avatar' />
            </div>
            <div className='h-32 flex-1 p-4 mt-4 sm:mt-0 bg-neutral-800/80 rounded-lg'>
                <div className='flex flex-wrap gap-4'>
                    {abilities?.map((ab, index) => (
                        <div key={index} className='flex flex-col gap-2 sm:w-[17%] w-[15%]'>
                            <div className='text-base font-bold'>{ab.name}</div>
                            <div className='h-1.5 w-full max-w-full relative'>
                                <div className='top-0 left-0 absolute w-full h-full bg-neutral-700/80' />
                                <div className='top-0 left-0 absolute bg-white h-full w-0' style={{ width: ab.value + '%' }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
