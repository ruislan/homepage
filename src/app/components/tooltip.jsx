'use client';
import React from 'react';

export default function ToolTip({ content, children }) {
    const [isVisible, setIsVisible] = React.useState(false);
    return (
        <div className='relative inline-block' onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
            {children}
            {isVisible && <div className='absolute p-2 bg-neutral-800 rounded'>{content}</div>}
        </div>
    );
};
