import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import dayjs from 'dayjs';
import { Post, PostMatter } from '../model/type';
import showdown from 'showdown';
import { POSTS_PATH, POST_EXT } from '../config';
import { parseToc } from '../../utils';

export async function getPostBySlug({ group, slug }: { group: string; slug: string }): Promise<Post> {
  const filepath = path.join(POSTS_PATH, group, slug) + POST_EXT;
  const mdx = matter(fs.readFileSync(filepath, 'utf8'));
  const grayMatter = mdx.data as PostMatter & { category: string };
  const toc = parseToc(mdx.content);
  const content = new showdown.Converter().makeHtml(mdx.content);
  return {
    ...grayMatter,
    dateString: dayjs(grayMatter.date).locale('ko').format('YYYY년 MM월 DD일'),
    content,
    toc,
    readingMinutes: Math.ceil(readingTime(mdx.content).minutes),
    uri: path.relative(process.cwd(), filepath),
  };
}
