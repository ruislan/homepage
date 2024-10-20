'use client';

import clsx from "clsx";

const bgColors = {
    'stable': 'bg-green-700',
    'beta': 'bg-blue-700',
    'alpha': 'bg-blue-700',
    'dev': 'bg-purple-700',
    'plan': 'bg-yellow-700',
};

export default function VersionState({ label, state }) {
    return (
        <div className={clsx('flex items-center gap-1 text-xs text-gray-100 px-1 py-0.5',
            'rounded-lg shadow-sm font-semibold',
            bgColors[state],
        )}>
            <span>{label}</span>
            <span>{state}</span>
        </div>
    );
}