import { getPostBySlug } from '../../../data/posts';
import PostDetailSection from '../../../sections/PostDetailSection';

const Page = async ({ params }: any) => {
  const { group, slug } = params;
  const post = await getPostBySlug({ group, slug });
  return <PostDetailSection group={group} post={post} />;
};

export default Page;
