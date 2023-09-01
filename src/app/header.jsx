'use client';

import clsx from 'clsx';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menus = [
  { path: '/', name: '首页' },
  { path: '/works', name: '工作' },
  { path: '/posts', name: '博客' },
  { path: '/gears', name: '装备' },
];

export default function Header() {
  let pathname = usePathname() || '/';
  if (pathname.includes('/posts/')) pathname = '/posts';
  else if (pathname.includes('/works/')) pathname = '/works';

  return (
    <header>
      <nav className='flex items-center py-8'>
        <a href='/' className='font-bold text-lg mr-6 flex items-center gap-1'>
          <span className='w-6 h-6'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12 15V17H18V15H12ZM8.41421 12L5.58579 14.8284L7 16.2426L11.2426 12L7 7.75736L5.58579 9.17157L8.41421 12Z' fill='rgba(255,255,255,1)'></path></svg>
          </span>
          <span>Rui's Studio</span>
        </a>
        <div className='flex flex-wrap items-center gap-4'>
          {menus.map(({ path, name }) => {
            return <Link key={path} href={path}
              className={clsx(
                'transition-all hover:text-white hover:underline underline-offset-4',
                pathname === path ? 'text-white underline' : 'text-neutral-500'
              )}>{name}</Link>
          })}
        </div>
      </nav>
    </header>
  );
}
