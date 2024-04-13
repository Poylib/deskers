import { MDXRemote } from 'next-mdx-remote/rsc';
import 'github-markdown-css';
import { Post } from '@/data/posts';

export default function Content({ post }: { post: Post }) {
  return (
    <div className={'markdown-body'} style={{ paddingTop: 40, paddingBottom: 40 }}>
      <MDXRemote source={post.content} />
    </div>
  );
}
