import database from '@/lib/database';

import PostCard from './components/post-card';
import WorkCard from './components/work-card';
import Paragraph from './components/paragraph';
import ToolTip from './components/tooltip';
import { ExternalLink } from './components/icons';
import SkillLayer from './components/skill-layer';

// refresh every half an hour
export const revalidate = 1800;

export default async function Page() {
  const posts = await database.Post.getTopViewPosts();
  const works = await database.Work.getTopWorks();
  const skills = (await database.Skill.getSkills()).sort((a, b) => b.yIndex - a.yIndex);

  return (
    <div>
      <h1 className='font-bold text-2xl mb-8'>Hi，大家好，我是 Rui 🤟🏼</h1>
      <section className='mb-8'>
        <Paragraph>
          一个 80 后，充满激情和创造力的全栈开发者，乐观主义者，向往一切美好的事物。
        </Paragraph>
      </section>

      <section className='mb-8'>
        <Paragraph>
          在我从写下第一行商业代码开始的 19 年时间里（从 2004 年开始），就没有停止过写点东西并且分享出来，
          这些东西包含了我学习获得知识、研发遇到的坑、以及一些突发奇想和各种感悟，我想尽量简单地写下来，在这里分享。
        </Paragraph>
        <div className='flex flex-col my-6 space-y-4 w-full'>
          {posts.map(post => <PostCard key={post.slug} post={post} endEnhancer={
            <span className='text-neutral-300 fill-neutral-300 w-4 h-4'><ExternalLink /></span>
          } />)}
        </div>
      </section>

      <section className='mb-8'>
        <Paragraph>
          最近 2、3 年时间，开始利用一些闲暇时间做一些东西，也算是边学习边练手。
          这些东西包括一些语言的学习，一些想法的实现以及对一些有意思项目的模仿，例如 Steam 社区。
        </Paragraph>
        <div className='grid grid-cols-1 sm:grid-cols-2 my-6 gap-4 w-full'>
          {works.map(work => <WorkCard key={work.slug} work={work} />)}
        </div>
      </section>

      <section className='mb-8'>
        <Paragraph>
          入行初期最喜欢的是 Java ，迷恋了 10 多年，从 JDK1.2 走到了现在，后来被 Kotlin 的语法糖和高效迷得神魂颠倒，再后来痴迷于 Rust 的设计思想，
          并且为了学习它做了几百道 LeetCode 题目。最近一段时间在关注、学习和使用这些技术：Fastify，Prisma，React，Vite，NextJS，
          以及有了虚拟线程的非常棒的 JDK 21。 对于技术栈来说，没有偏爱，工作更多的是 Java Stack ， 而个人更多的是 JS Stack 。
        </Paragraph>
        <div className='flex flex-wrap my-6 gap-2 w-full'>
          {skills.map((layer, i) => <SkillLayer key={i} layer={layer} />)}
        </div>
      </section>

      <section className='mb-8'>
        <Paragraph>
          最后，如果你觉得我的分享还不错，有些帮助，欢迎给我
          <ToolTip content={'ETH:0x73028936Fd29467E229A585611c37bB9042B10EB'}>
            <span className='font-bold underline underline-offset-4 cursor-pointer'>打赏</span>
          </ToolTip>
          、
          <ToolTip content={'Mail:z17520@126.com'}>
            <span className='font-bold underline underline-offset-4 cursor-pointer'>联系</span>
          </ToolTip>
          我、或者雇佣我。
        </Paragraph>
      </section>
    </div>
  )
}
