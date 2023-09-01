import Paragraph from "@/app/components/paragraph";
import database from "@/lib/database";

export default async function PostsPage({ params }) {
    await database.Post.incrementViews(params.slug);
    const post = await database.Post.getPost(params.slug);

    return (
        <div>
            <h1 className='font-bold text-2xl mb-8'>{post.title}</h1>
            <div>{post.views}</div>
            <div>{post.date}</div>
            <Paragraph dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
    );
}