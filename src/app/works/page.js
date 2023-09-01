import prisma from '@/lib/prisma';
import PostItem from '../components/post-item';

export const metadata = {
    title: '工作',
    description: '分享我做的一些东西',
};

export default async function WorksPage() {
    return (
        <div>
            <h1 className='font-bold text-2xl mb-8'>我的工作</h1>
        </div>
    );
}