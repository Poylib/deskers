import { getPostBySlug } from '../../../data/posts';
import { PostBody } from '../../../sections/post_detail/PostBody';
import { PostHeader } from '../../../sections/post_detail/PostHeader';
const Page = async ({ params }: any) => {
  const { group, slug } = params;
  const post = await getPostBySlug({ group, slug });
  return (
    <div className="prose mx-auto w-full max-w-[750px] px-4 dark:prose-invert">
      <PostHeader post={post as any} />
      <PostBody post={post as any} />
    </div>
  );
};

export default Page;
