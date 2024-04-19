import BreadCrumbs from '@/lib/sections/post_detail/BreadCrumbs';
import { getPostBySlug } from '../../../data/posts';
import { PostBody } from '../../../sections/post_detail/PostBody';
import { PostHeader } from '../../../sections/post_detail/PostHeader';
import Thumbnail from '@/lib/sections/post_detail/Thumbnail';
const Page = async ({ params }: any) => {
  const { group, slug } = params;
  const post = await getPostBySlug({ group, slug });
  return (
    <div className="prose mx-auto w-full max-w-[750px] px-4 dark:prose-invert">
      <Thumbnail img={post.thumbnail} />
      <BreadCrumbs group={group} slug={slug} />
      <PostHeader post={post as any} />
      <PostBody post={post as any} />
    </div>
  );
};

export default Page;
