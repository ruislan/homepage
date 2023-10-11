'use client';
import { useState } from 'react';

export default function ToolTip({ content, children }) {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div className='relative inline-block' onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
            {children}
            {isVisible && <div className='absolute p-2 bg-neutral-800 rounded-md'>{content}</div>}
        </div>
    );
};
