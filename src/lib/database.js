import prisma from './prisma';
import fs from 'fs/promises';

const database = {
    Post: {
        data: [
            { slug: 'talk-about-digitalization', title: '浅谈数字化', summary: '简单地综合阐述一下数字化', date: '2023-02-24', hero: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwxMTc3M3wwfDF8c2VhcmNofDE0fHxkYXRhJTIwY2VudGVyfGVufDB8fHx8MTY3NzIyNTQ4Mw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=2000' },
            { slug: 'talk-about-lowcode', title: '"低代码“之我见', summary: '简单地综合阐述一下低代码', date: '2021-11-11', hero: '/images/posts/talk-about-lowcode/hero.jpg' },
            { slug: 'architecture-core', title: '架构那些事儿 - 核心思想', summary: '架构师，架构设计，如何做架构', date: '2021-05-19', hero: '/images/posts/architecture-core/hero.jpg' },
            { slug: 'architecture-guide', title: '架构那些事儿 - 工作指南', summary: '架构师，架构设计，如何做架构', date: '2021-05-18', hero: '/images/posts/architecture-guide/hero.jpg' },
            { slug: 'talent-six-tao', title: '人才”六道“之说', summary: '如何才是一个优秀的人？看看我的人才”六道“之说。', date: '2020-11-14', hero: '/images/posts/talent-six-tao/hero.jpg' },
            { slug: 'remember-200-digits', title: '记住200个随机数字 ? !', summary: '如何在30分钟内记住200个随机数字', date: '2020-11-05', hero: '/images/posts/remember-200-digits/hero.jpg' },
            { slug: 'read-success', title: '读书笔记之《成事》', summary: '看起来不累，也有收获，不厚重，但细细品味，会有不小的感悟', date: '2019-06-12', hero: '/images/posts/read-success/hero.jpg' },
            { slug: 'work-method-doing', title: '我的工作方法论 - 关于事', summary: '工作当然最重要的还是把事儿办好，做得有效率，有质量。如何才能有效率有质量，我有一些方法观供大家参考。', date: '2019-05-28', hero: '/images/posts/work-method-doing/hero.jpg' },
            { slug: 'read-devops', title: '读书笔记之《DevOps实践指南》', summary: '我认为我和我的团队应该去实践DevOps，我认为这就是当下最好的知识，我们每个人都应该学习。', date: '2019-05-20', hero: '/images/posts/read-devops/hero.jpg' },
            { slug: 'work-method-human', title: '我的工作方法论 - 关于人', summary: '在工作中，免不了和人打交道，所以关于人，应该有一些基本的原则。', date: '2019-05-13', hero: '/images/posts/work-method-human/hero.jpg' },
            { slug: 'work-method-value', title: '我的工作方法论 - 核心价值观', summary: '作为领导需要什么样的员工，作为员工，需要进入什么样的企业。', date: '2019-05-06', hero: '/images/posts/work-method-value/hero.jpg' },
            { slug: 'cicd-jvm', title: '用野路子实现JVM项目CI/CD', summary: '用野路子实现JVM项目CI/CD', date: '2019-04-26', hero: '/images/posts/cicd-jvm/hero.jpg' },
            { slug: 'linux-cmd', title: '好玩的Linux指令', summary: '好玩的Linux指令', date: '2019-04-26', hero: '' },
            { slug: 'certbot', title: 'Let\'s Encrypt - certbot', summary: 'certbot非常的简单和容易上手，不需要10分钟，你只需要不到5分钟，整个操作就完成了。简单实用即真理。', date: '2018-11-05', hero: '/images/posts/certbot/hero.jpg' },
            { slug: 'develop-smart-contract', title: '智能合约开发手记', summary: '最近用EVM做了不少智能合约的项目，有lotto，vote，dao等等，说说感受吧。', date: '2018-09-12', hero: '/images/posts/develop-smart-contract/hero.jpg' },
            { slug: 'thinkers-and-doers', title: '思想者 与 实干者', summary: '这个世界上有思想者也有实干者，但是大多数思想者都是空想者。', date: '2018-01-23', hero: '/images/posts/thinkers-and-doers/hero.jpg' },
            { slug: 'share-party', title: '分享会，Enjoy', summary: '没想到，10几年了，还能上讲台跟大家分享技术，这一次，是区块链，是以太坊，是智能合约', date: '2018-01-20', hero: '/images/posts/share-party/hero.jpg' },
            { slug: 'alg-luhn', title: '信用卡之LUHN算法', summary: 'Luhn 算法或是Luhn 公式，也被称作“模10算法”。它是一种简单的校验公式，一般会被用于身份证号码，IMEI号码，美国供应商识别号码，或是加拿大的社会保险号码的验证。', date: '2016-01-30', hero: '/images/posts/alg-luhn/hero.jpg' },
            { slug: 'alg-snowflake', title: 'Snowflake算法', summary: 'snowflake是twitter为了搬移数据库从Mysql到cassandra生成可排序主键而创造的极其简单高效的分布式主键生成算法。', date: '2014-01-30', hero: '/images/posts/alg-snowflake/hero.jpg' },
        ],
        async getPosts() {
            const posts = this.data;
            const viewCounts = await prisma.viewCount.findMany();
            for (const post of posts) {
                post.views = viewCounts.find(v => v.slug === post.slug)?.total || 0;
            }
            return posts;
        },
        async getPostsGroupByYear() {
            const posts = await this.getPosts();
            const groups = {};
            for (const post of posts) {
                const year = post.date.split('-')[0];
                if (!groups[year]) groups[year] = [];
                groups[year].push(post);
            }
            const sortedGroups = Object.keys(groups).sort((a, b) => b.localeCompare(a)).map(year => ({ year, posts: groups[year] }));
            return sortedGroups;
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
                demo: 'https://ktap.ruislan.com',
            },
            {
                slug: 'simple-crm', title: 'Simple CRM', date: '2022-09',
                summary: 'Simple CRM 天然契合小微企业或者小团队及个人使用。以客户为中心，以人为本，促成交，存数据，挖价值，创业绩。',
                cover: '/images/works/simple-crm/dashboard.png',
                github: 'https://github.com/ruislan/simple-crm',
                demo: 'https://sc.ruislan.com',
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
    },
    Skill: {
        data: [
            { title: 'Java', quality: 5, },
            { title: 'Kotlin', quality: 5, color: '#7F52FF' },
            { title: 'Spring', quality: 4, color: '#6DB33F' },
            { title: 'Rust', quality: 3, },
            { title: 'JavaScript', quality: 4, color: '#F7DF1E' },
            { title: 'NodeJS', quality: 4, color: '#339933' },
            { title: 'Fastify', quality: 4, },
            { title: 'Prisma', quality: 4, },
            { title: 'React', quality: 3, color: '#61DAFB' },
            { title: 'Vite', quality: 3, color: '#646CFF' },
            { title: 'MySQL', quality: 4, color: '#4479A1' },
            { title: 'SQLite', quality: 4, color: '#2496ED' },
            { title: 'MongoDB', quality: 4, color: '#47A248' },
            { title: 'Redis', quality: 2, color: '#DC382D' },
            { title: 'RabbitMQ', quality: 1, color: '#FF6600' },
            { title: 'Docker', quality: 4, color: '#2496ED' },
            { title: 'Git', quality: 4, color: '#F05032' },
        ],
        async getSkills() {
            return this.data;
        },
    }
};

export default database;