import { Post } from '../data/model/type';
import BreadCrumbs from './post_detail/BreadCrumbs';
import { PostBody } from './post_detail/PostBody';
import { PostHeader } from './post_detail/PostHeader';
import Thumbnail from './post_detail/Thumbnail';

export function PostDetailSection({ group, slug, post }: { group?: string; slug?: string; post: Post }) {
  return (
    <div>
      <div className="prose mx-auto w-full max-w-[950px] px-4 dark:prose-invert">
        <Thumbnail img={post.thumbnail} />
        <BreadCrumbs group={group!} slug={slug!} />
        <PostHeader post={post as any} />
        <PostBody post={post as any} />
      </div>
    </div>
  );
}

export default PostDetailSection;
