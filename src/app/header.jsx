'use client';

import clsx from 'clsx';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Github, Terminal } from './components/icons';

const menus = [
  { path: '/', name: '首页' },
  { path: '/projects', name: '项目' },
  { path: '/posts', name: '博客' },
  { path: '/friends', name: '朋友' },
  { path: '/gears', name: '装备' },
  { path: '/privacy', name: '声明' },
  { path: 'https://github.com/ruislan/homepage', name: '源码', icon: 'github' },
];

export default function Header() {
  let pathname = usePathname() || '/';
  if (pathname.includes('/posts/')) pathname = '/posts';
  else if (pathname.includes('/projects/')) pathname = '/projects';

  return (
    <header>
      <nav className='flex flex-col md:flex-row md:items-center pt-8 pb-4 md:pb-8'>
        <a href='/' className='font-bold text-lg md:mr-6 mb-6 md:mb-0 flex items-center gap-1'>
          <span className='w-6 h-6'><Terminal /></span>
          <span>Rui</span>
        </a>
        <div className='flex flex-wrap items-center gap-4'>
          {menus.map(({ path, name }) => (
            <Link
              key={path}
              href={path}
              className={clsx(
                'inline-flex',
                'transition-all hover:text-white hover:underline underline-offset-4',
                pathname === path ? 'text-white underline' : 'text-gray-400'
              )}>
              {name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
