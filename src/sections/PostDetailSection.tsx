import { Post } from '../data/model/type';
import BreadCrumbs from './post_detail/BreadCrumbs';
import { PostBody } from './post_detail/PostBody';
import { PostHeader } from './post_detail/PostHeader';
import Thumbnail from './post_detail/Thumbnail';
import TocTop from './post_detail/TableOfContentTop';
import TocSidebar from './post_detail/TableOfContentSidebar';

export function PostDetailSection({ group, slug, post }: { 
  group?: string; 
  slug?: string; 
  post: Post 
}) {
  return (
    <div>
      <div className="prose mx-auto w-full max-w-[650px] px-4 dark:prose-invert">
        <Thumbnail img={post.thumbnail} />
        <BreadCrumbs group={group!} title={post?.title} />
        <PostHeader post={post as any} />
        <TocTop toc={post.toc} />
        <article className="relative">
          <TocSidebar toc={post.toc} />
          <PostBody post={post as any} />
        </article>
      </div>
    </div>
  );
}

export default PostDetailSection;
