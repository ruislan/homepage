import Paragraph from "@/app/components/paragraph";
import database from "@/lib/database";

export default async function PostsPage({ params }) {
    const work = await database.Work.getWork(params.slug);
    if (!work) return null;
    return (
        <div>
            <h1 className='font-bold text-2xl mb-8'>{work.title}</h1>
            <div>{work.likes}</div>
            <Paragraph>
                {work.content}
            </Paragraph>
            {/* screenshots */}
        </div>
    );
}