import { getPosts } from '../data/posts';
import { getHashTags } from '../data/posts/get-hash-tags';
import PostListPage from '../sections/PostListSection';

const Home = async ({ searchParams }: any) => {
  const { category } = searchParams;
  const posts = await getPosts({ category });
  const hashTags = getHashTags();
  return <PostListPage posts={posts} hashTags={hashTags} category={category} />;
};

export default Home;
