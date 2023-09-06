'use client';
export default function Paragraph({ ...props }) {
    return (
        <div className='my-6 prose dark:prose-invert prose-neutral max-w-none' {...props} />
    );
}
