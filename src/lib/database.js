import prisma from './prisma';
import fs from 'fs/promises';

export default database = {
    Post: {
        data: [
            { slug: 'test', title: 'test', summary: 'test', date: '2023-09-09' },
        ],
        async getPosts() {
            const posts = this.data;
            const viewCounts = await prisma.viewCount.findMany();
            for (const post of posts) {
                post.views = viewCounts.find(v => v.slug === post.slug)?.total || 0;
            }
            return posts;
        },
        async getTopViewPosts(limit = 3) {
            const posts = this.data;
            const viewCounts = await prisma.viewCount.findMany({ orderBy: { total: 'desc' }, take: limit });
            const topPosts = await Promise.all(viewCounts.map(async v => {
                const post = posts.find(post => post.slug === v.slug);
                post.views = v.total;
                post.content = await fs.readFile(`./content/${post.slug}.html`, { encoding: 'utf-8' });
                return post;
            }));
            return topPosts;
        },
        async getPost(slug) {
            const post = this.data.find(p => p.slug === slug);
            if (!post) return null;
            const viewCount = await prisma.viewCount.findUnique({ where: { slug } });
            post.views = viewCount ? viewCount.total : 0;
            // load html from content
            post.content = await fs.readFile(`./content/${post.slug}.html`, { encoding: 'utf-8' });
            return post;
        },
        async incrementViews(slug) {
            await prisma.viewCount.upsert({
                where: { slug },
                update: { total: { increment: 1 } },
                create: { slug, total: 1 },
            });
        }
    },
    Work: {
        data: [
            {
                slug: 'test', title: 'test', summary: 'test', date: '2023-09-09', cover: '',
                content: `just test`,
                screenshots: [
                    '', '',
                ]
            },
        ],
        getWorks() {
            return this.data;
        },
        async getWork(slug) {
            const work = this.data.find(w => w.slug === slug);
            if (!work) return null;
            return work;
        },
        async getTopWorks(limit = 3) {
            // chose most like
            return this.data.slice(0, limit);
        }
    }
};