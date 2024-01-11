import database from "@/lib/database";
import ProjectCard from "../components/project-card";

export const metadata = {
    title: '项目',
    description: '分享我做的一些东西',
};

export default async function Page() {
    const projects = database.Project.getProjects();
    return (
        <div>
            <h1 className='font-bold text-2xl mb-8'>我的项目</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 my-6 gap-4 w-full'>
                {projects.map((project, index) => <ProjectCard key={index} project={project} />)}
            </div>
        </div>
    );
}