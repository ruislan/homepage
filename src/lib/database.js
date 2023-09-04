import prisma from './prisma';
import fs from 'fs/promises';

const database = {
    Post: {
        data: [
            { slug: 'talk-about-digitalization', title: '浅谈数字化', summary: '简单地综合阐述一下数字化', date: '2023-02-24' },
            { slug: 'linux-cmd', title: '好玩的Linux指令', summary: '好玩的Linux指令', date: '2019-04-26' },
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
            let topPosts = await Promise.all(viewCounts.map(async v => {
                const post = posts.find(post => post.slug === v.slug);
                if (!post) return null;
                post.views = v.total;
                post.content = await fs.readFile(`./content/posts/${post.slug}.html`, { encoding: 'utf-8' });
                return post;
            }));
            topPosts = topPosts.filter(post => post);
            return topPosts;
        },
        async getPost(slug) {
            const post = this.data.find(p => p.slug === slug);
            if (!post) return null;
            const viewCount = await prisma.viewCount.findUnique({ where: { slug } });
            post.views = viewCount ? viewCount.total : 0;
            // load html from content
            post.content = await fs.readFile(`./content/posts/${post.slug}.html`, { encoding: 'utf-8' });
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
                slug: 'ktap', title: 'KTap', date: '2023-06',
                summary: '一个时尚的游戏社区平台',
                cover: '/images/works/ktap/cover.png',
                github: 'https://github.com/ruislan/ktap',
            },
            {
                slug: 'simple-crm', title: 'Simple CRM', date: '2022-09',
                summary: 'Simple CRM 天然契合小微企业或者小团队及个人使用。以客户为中心，以人为本，促成交，存数据，挖价值，创业绩。',
                cover: '/images/works/simple-crm/dashboard.png',
                github: 'https://github.com/ruislan/simple-crm',
            },
            {
                slug: 'leetcode-rust', title: 'LeetCode in Rust', date: '2021-09',
                summary: '学习 Rust 时刷了几百道 LeetCode 题，以及一些算法',
                cover: '/images/works/leetcode-rust/screenshot.png',
                github: 'https://github.com/ruislan/leetcode',
            },
        ],
        getWorks() {
            return this.data;
        },
        async getWork(slug) {
            const work = this.data.find(w => w.slug === slug);
            if (!work) return null;
            // load html from content
            work.content = await fs.readFile(`./content/works/${work.slug}.html`, { encoding: 'utf-8' });
            return work;
        },
        async getTopWorks(limit = 4) {
            // chose most like
            return this.data.slice(0, limit);
        }
    }
};

export default database;