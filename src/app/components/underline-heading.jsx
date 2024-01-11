'use client';

export default function UnderlineHeading({ title }) {
    return (
        <h3 className='font-bold text-lg underline underline-offset-8 decoration-neutral-400 decoration-4'>{title}</h3>
    );
}