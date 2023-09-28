import database from "@/lib/database";
import WorkCard from "../components/work-card";

export const metadata = {
    title: '工作',
    description: '分享我做的一些东西',
};

export default async function WorksPage() {
    const works = database.Work.getWorks();
    return (
        <div>
            <h1 className='font-bold text-2xl mb-8'>我的工作</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 my-6 gap-4 w-full'>
                {works.map((work, index) => <WorkCard key={index} work={work} />)}
            </div>
        </div>
    );
}