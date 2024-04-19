import { Post } from '../data/model/type';
import CategoryList from './post_list/CategoryList';
import PostCard from './post_list/PostCard';

const PostListPage = async ({
  group,
  category,
  hashTags,
  posts,
}: {
  group?: string;
  category?: string;
  posts: Post[];
  hashTags: {
    category: string;
    displayName: string;
    count: number;
  }[];
}) => {
  return (
    <section className="mx-auto mt-12 w-full max-w-[950px] px-4">
      <CategoryList
        allPostCount={posts.length}
        categoryList={hashTags.map((h) => {
          return { dirName: h.category, publicName: h.displayName, count: h.count };
        })}
        group={group}
        currentCategory={category}
      />
      <section>
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {posts.map((post) => (
            <PostCard key={post.uri + post.date} post={post as any} />
          ))}
        </ul>
      </section>
    </section>
  );
};

export default PostListPage;
