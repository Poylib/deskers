// @ts-expect-error no types
import remarkA11yEmoji from '@fec/remark-a11y-emoji';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import { MdxComponents } from '../../components/mdx';
import { Post } from '../../data/model/type';

// import styles from './PostBody.module.scss';

interface Props {
  post: Post;
}

export const PostBody = async({ post }: Props) => {
  return (
     <MDXRemote
       source={post.content}
       options={{
         mdxOptions: {
           remarkPlugins: [
             remarkGfm,
             remarkA11yEmoji,
             remarkBreaks,
           ],
           rehypePlugins: [
             [
               // @ts-ignore
               rehypePrettyCode,
               {
                 theme: { dark: 'github-dark-dimmed', light: 'github-light' },
               },
             ],
             rehypeSlug,
           ],
         },
       }}
       components={MdxComponents}
     />
  );
};
