// @ts-expect-error no types
import remarkA11yEmoji from '@fec/remark-a11y-emoji';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import { MdxComponents } from '../../components/mdx';
import { Post } from '../../data/model/type';
import { Converter } from 'showdown';

interface Props {
  post: Post;
}

export const PostBody = ({ post }: Props) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: new Converter().makeHtml(post.content) }} />
    // <>{new Converter().makeHtml(post.content)}</>
    // <MDXRemote
    //   source={post.content}
    //   options={{
    //     mdxOptions: {
    //       remarkPlugins: [
    //         remarkGfm,
    //         remarkA11yEmoji,
    //         remarkBreaks,
    //       ],
    //       rehypePlugins: [
    //         [
    //           // @ts-ignore
    //           rehypePrettyCode,
    //           {
    //             theme: { dark: 'github-dark-dimmed', light: 'github-light' },
    //           },
    //         ],
    //         rehypeSlug,
    //       ],
    //     },
    //   }}
    //   components={MdxComponents}
    // />
  );
};
