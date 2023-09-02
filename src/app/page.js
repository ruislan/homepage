import database from '@/lib/database';

import PostCard from './components/post-card';
import WorkCard from './components/work-card';
import Paragraph from './components/paragraph';

export default async function Page() {
  const posts = await database.Post.getTopViewPosts();
  const works = await database.Work.getTopWorks();

  return (
    <div>
      <h1 className='font-bold text-2xl mb-8'>Hi，大家好，我是 Rui  👏</h1>
      <Paragraph>
        一个 80 后，充满激情和创造力的全栈开发者，乐观主义者，向往一切美好的事物。喜欢在闲暇之余实现各种有意思的项目。
      </Paragraph>

      <section>
        <Paragraph>
          在我从写下第一行商业代码开始的 19 年时间里（从 2004 年开始），就没有停止过写点东西并且分享出来，
          这些东西包含了我学习获得知识，研发遇到的坑，以及一些突发奇想和各种感悟，我尽量想简单地写下来，在此时此刻此地分享。
        </Paragraph>
        <div className='flex flex-col my-6 space-y-4 w-full'>
          {posts.map(post => <PostCard key={post.slug} post={post} endEnhancer={
            <div className='text-neutral-300'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z' fill='rgba(255,255,255,1)'></path></svg>
            </div>}
          />)}
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
        {/* list skills */}
      </section>

      <section>
        <Paragraph>
          最后，如果你觉得我的分享还不错，对你有帮助，你也可以给我打赏(ETH:0x73028936Fd29467E229A585611c37bB9042B10EB)。
          或者，联系并雇佣我。
        </Paragraph>
      </section>
    </div>
  )
}
