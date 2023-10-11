'use client';

import clsx from "clsx";

export default function Tag({ className, ...rest }) {
    return (
        <span className={clsx('inline-block whitespace-nowrap align-text-top text-xs',
            'bg-neutral-700 hover:bg-neutral-600 text-neutral-50 hover:text-neutral-100',
            'cursor-pointer shadow-md px-2 py-1 rounded-lg', className)} {...rest} />
    );
};
