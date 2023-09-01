import database from "@/lib/database";
import WorkItem from "../components/work-item";

export const metadata = {
    title: '工作',
    description: '分享我做的一些东西',
};

export default async function WorksPage() {
    const works = database.Work.getWorks();
    return (
        <div>
            <h1 className='font-bold text-2xl mb-8'>我的工作</h1>

            <div className='flex flex-col'>
                {works.map((work, index) => <WorkItem key={index} work={work} />)}
            </div>
        </div>
    );
}