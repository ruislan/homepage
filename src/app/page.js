import database from '@/lib/database';

import PostCard from './components/post-card';
import WorkCard from './components/work-card';
import Paragraph from './components/paragraph';
import ToolTip from './components/tooltip';
import SkillCard from './components/skill-card';
import { ExternalLink } from './components/icons';

// refresh every 1 hour
export const revalidate = 3600;

export default async function Page() {
  const posts = await database.Post.getTopViewPosts();
  const works = await database.Work.getTopWorks();
  const skills = await database.Skill.getSkills();

  return (
    <div>
      <h1 className='font-bold text-2xl mb-8'>Hi，大家好，我是 Rui 👏🏼</h1>
      <section>
        <Paragraph>
          一个 80 后，充满激情和创造力的全栈开发者，乐观主义者，向往一切美好的事物。
        </Paragraph>
      </section>

      <section>
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

      <section>
        <Paragraph>
          最近 2、3 年时间，开始利用一些闲暇时间做一些东西，也算是边学习边练手。
          这些东西包括一些语言的学习，以及对一些有意思的项目进行模仿，例如 Steam Community 。
        </Paragraph>
        <div className='grid grid-cols-2 my-6 gap-4 w-full'>
          {works.map(work => <WorkCard key={work.slug} work={work} />)}
        </div>
      </section>

      <section>
        <Paragraph>
          入行初期最喜欢的是 Java ，迷恋了 10 多年，从 JDK1.2 走到了现在，后来被 Kotlin 的语法糖和高效迷得神魂颠倒，再后来痴迷于 Rust 的设计思想，
          并且为了学习它疯狂做了几百道 LeetCode 题目，最近一段时间在学习和使用这些技术：NodeJS，Fastify，Prisma，React，Vite，NextJS。
        </Paragraph>
        <div className='flex flex-wrap my-6 gap-2 w-full'>
          {skills.map(skill => <SkillCard key={skill.title} skill={skill} />)}
        </div>
      </section>

      <section>
        <Paragraph>
          最后，如果你觉得我的分享还不错，对你有帮助，你也可以给我
          <ToolTip content={'ETH:0x73028936Fd29467E229A585611c37bB9042B10EB'}>
            <span className='font-bold underline underline-offset-4 cursor-pointer'>打赏</span>
          </ToolTip>
          ，或者
          <ToolTip content={'Mail:z17520@126.com'}>
            <span className='font-bold underline underline-offset-4 cursor-pointer'>联系</span>
          </ToolTip>
          并雇佣我。
        </Paragraph>
      </section>
    </div>
  )
}
