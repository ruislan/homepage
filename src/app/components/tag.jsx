'use client';

import clsx from "clsx";

export default function Tag({ name, color }) {
    return (
        <div className={clsx('inline-block align-text-top text-xs',
            'bg-neutral-700 hover:bg-neutral-600 text-neutral-50 hover:text-neutral-100',
            'cursor-pointer hover:shadow-md p-1 rounded-lg')}>
            {name}
        </div>
    );
};
