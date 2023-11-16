import prisma from './prisma';
import fs from 'fs/promises';

const readContent = async ({ slug, isPost = true, isMarkdown = false }) => {
    let filename = isPost ? `./content/posts/${slug}` : `./content/works/${slug}`;
    filename = isMarkdown ? `${filename}.md` : `${filename}.html`;
    let content = null;
    try {
        content = await fs.readFile(filename, { encoding: 'utf-8' });
    } catch (err) {
        // maybe not found ,whatever, ignore the err
        console.error(err);
    }
    return content;
};

const database = {
    Post: {
        data: [
            { type: 'md', slug: 'use-pkg', title: '使用 pkg 来打包 NodeJS 应用', summary: '用 NodeJS 做了个小工具，要给不懂程序的朋友使用，就用 pkg 打个包吧。', date: '2023-11-16', hero: '/images/posts/use-pkg/hero.jpg' },
            { type: 'md', slug: 'master', title: '真正的聪明人', summary: '最近思考了一下什么才是真正的聪明人，小有感悟', date: '2023-10-18', hero: '/images/posts/master/hero.jpg' },
            { type: 'md', slug: 'my-2007', title: '我的 2007 年', summary: '在 2007 年，我竟然写了这么多博文', date: '2023-10-17', hero: '/images/posts/my-2007/hero.jpg' },
            { slug: 'talk-about-digitalization', title: '浅谈数字化', summary: '简单地综合阐述一下数字化', date: '2023-02-24', hero: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwxMTc3M3wwfDF8c2VhcmNofDE0fHxkYXRhJTIwY2VudGVyfGVufDB8fHx8MTY3NzIyNTQ4Mw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=2000' },
            { slug: 'talk-about-lowcode', title: '"低代码“之我见', summary: '简单地综合阐述一下低代码', date: '2021-11-11', hero: '/images/posts/talk-about-lowcode/hero.jpg' },
            { type: 'md', slug: 'leetcode-note', title: 'LeetCode 笔记', summary: '为了学习 Rust 刷了 2 年的 LeetCode，总结了个笔记，收藏了一些好题。', date: '2021-09-27', hero: '/images/posts/leetcode-note/hero.jpg' },
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
                post.content = await readContent({ slug: post.slug, isMarkdown: post.type === 'md' });
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
            post.content = await readContent({ slug: post.slug, isMarkdown: post.type === 'md' });
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
                slug: 'kforum', title: 'KForum', date: '2023-10',
                summary: '一个简单、现代、时尚、有趣的论坛社区',
                cover: '/images/works/kforum/cover.png',
                github: 'https://github.com/ruislan/kforum',
                demo: null,
                versions: [
                    { label: 'v0.5.0', state: 'alpha' },
                    { label: 'v0.6.0', state: 'dev' }
                ],
                tags: [
                    { name: 'Tailwind CSS', },
                    { name: 'NextAuth', },
                    { name: 'NextJS', },
                    { name: 'Prisma', },
                ]
            },
            {
                slug: 'ktap', title: 'KTap', date: '2023-06',
                summary: '一个时尚的游戏社区平台',
                cover: '/images/works/ktap/cover.png',
                github: 'https://github.com/ruislan/ktap',
                status: 'developing',
                versions: [
                    { label: 'v1.5.0', state: 'dev' },
                    { label: 'v1.2.0', state: 'alpha' },
                    { label: 'v1.0.0', state: 'alpha' },
                ],
                demo: 'https://ktap.ruislan.com',
                tags: [
                    { name: 'React', },
                    { name: 'BaseWeb', },
                    { name: 'Fastify', },
                    { name: 'Prisma', },
                ]
            },
            {
                slug: 'simple-crm', title: 'Simple CRM', date: '2022-09',
                summary: 'Simple CRM 天然契合小微企业或者小团队及个人使用。以客户为中心，以人为本，促成交，存数据，挖价值，创业绩。',
                cover: '/images/works/simple-crm/dashboard.png',
                github: 'https://github.com/ruislan/simple-crm',
                demo: 'https://sc.ruislan.com',
                versions: [
                    { label: 'v1.0.0', state: 'stable' },
                ],
                tags: [
                    { name: 'Bootstrap 5', },
                    { name: 'Nunjucks', },
                    { name: 'JQuery', },
                    { name: 'Fastify', },
                    { name: 'Prisma', },
                ]
            },
            {
                slug: 'leetcode-rust', title: 'LeetCode in Rust', date: '2021-09',
                summary: '学习 Rust 时刷了几百道 LeetCode 题，以及一些算法',
                cover: '/images/works/leetcode-rust/screenshot.png',
                github: 'https://github.com/ruislan/leetcode',
                tags: [
                    { name: 'Rust', },
                ]
            },
            {
                slug: 'korderbook', title: 'Simple OrderBook', date: '2018-09',
                summary: '简单的 Order Match Engine， 支持限价单和市价单',
                cover: '/images/works/korderbook/screenshot.png',
                github: 'https://github.com/ruislan/korderbook',
                versions: [
                    { label: 'v0.1.0', state: 'alpha' },
                ],
                tags: [
                    { name: 'Matching Engine', },
                    { name: 'Java', },
                    { name: 'Kotlin', },
                ]
            },
        ],
        getWorks() {
            return this.data;
        },
        async getWork(slug) {
            const work = this.data.find(w => w.slug === slug);
            if (!work) return null;
            work.content = await readContent({ slug: work.slug, isPost: false });
            return work;
        },
        async getTopWorks(limit = 4) {
            // chose most like
            return this.data.slice(0, limit);
        }
    },
    Skill: {
        data: [
            [
                {
                    title: '前端',
                    items: [
                        { title: 'NextJS', quality: 3, },
                        { title: 'React', quality: 4, color: '#61DAFB' },
                        { title: 'Vite', quality: 3, color: '#646CFF' },
                        { title: 'TailwindCSS', quality: 4, color: '#06B6D4' },
                        { title: 'BaseWeb', quality: 4, },
                        { title: 'Bootstrap', quality: 5, color: '#7952B3' },
                        { title: 'JQuery', quality: 5, color: '#0769AD' },
                    ]
                },
            ],
            [
                {
                    title: 'JVM Stack',
                    items: [
                        { title: 'Spring', quality: 4, color: '#6DB33F' },
                        { title: 'JPA', quality: 4 },
                        { title: 'JUnit5', quality: 4, color: '#25A162' },
                        { title: 'Gradle', quality: 3, color: '#02303A' },
                        { title: 'Maven', quality: 3, color: '#C71A36' },
                    ]
                },
                {
                    title: 'NodeJS Stack',
                    items: [
                        { title: 'NodeJS', quality: 4, color: '#339933' },
                        { title: 'Fastify', quality: 4, },
                        { title: 'Prisma', quality: 4, },
                        { title: 'Pnpm', quality: 3, color: '#F69220' },
                        { title: 'Yarn', quality: 3, color: '#2C8EBB' },
                    ]
                },
            ],
            [
                {
                    title: '程序语言',
                    items: [
                        { title: 'Java', quality: 5, },
                        { title: 'Kotlin', quality: 5, color: '#7F52FF' },
                        { title: 'JavaScript', quality: 5, color: '#F7DF1E' },
                        { title: 'Rust', quality: 3, },
                    ]
                },
            ],
            [
                {
                    title: '研发工具/软件',
                    items: [
                        { title: 'JetBrains IDEA', quality: 4 },
                        { title: 'Visual Studio Code', quality: 4, color: '#2496ED' },
                        { title: 'DBeaver', quality: 4, color: '#47A248' },
                        { title: 'Jenkins', quality: 3, color: '#D24939' },
                        { title: 'TeamCity', quality: 3 },
                        { title: 'Git', quality: 3, color: '#F05032' },
                    ]
                },
            ],
            [
                {
                    title: '中间件/数据库',
                    items: [
                        { title: 'MySQL', quality: 4, color: '#4479A1' },
                        { title: 'MariaDB', quality: 3, },
                        { title: 'SQLite', quality: 4, color: '#2496ED' },
                        { title: 'MongoDB', quality: 4, color: '#47A248' },
                        { title: 'Redis', quality: 3, color: '#DC382D' },
                        { title: 'RabbitMQ', quality: 3, color: '#FF6600' },
                    ]
                }
            ],
            [
                {
                    title: '运行环境',
                    items: [
                        { title: 'Ubuntu', quality: 4, color: '#E95420' },
                        { title: 'Docker', quality: 4, color: '#2496ED' },
                        { title: 'Nginx', quality: 4, color: '#009639' },
                    ]
                }
            ],
        ],
        async getSkills() {
            return this.data;
        },
    },
    Ability: {
        data: [
            { name: '管理', value: '85' },
            { name: '协作', value: '90' },
            { name: '产品', value: '85' },
            { name: '美术', value: '60' },
            { name: '营销', value: '55' },
            { name: '编码', value: '95' },
            { name: '架构', value: '90' },
            { name: '测试', value: '85' },
            { name: '运维', value: '75' },
            { name: '运营', value: '65' },
        ],
        async getAbilities() {
            return this.data;
        }
    }
};

export default database;