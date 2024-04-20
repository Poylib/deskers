import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import dayjs from 'dayjs';
import { Post, PostMatter } from '../model/type';

export async function getPost(filepath: string): Promise<Post> {
  const mdx = matter(fs.readFileSync(filepath, 'utf8'));
  const grayMatter = mdx.data as PostMatter & { category: string };
  const parsed = path.parse(filepath);
  return {
    ...grayMatter,
    dateString: dayjs(grayMatter.date).locale('ko').format('YYYY년 MM월 DD일'),
    content: mdx.content,
    readingMinutes: Math.ceil(readingTime(mdx.content).minutes),
    uri: path.relative(process.cwd(), path.join(parsed.dir.replace('posts/', ''), parsed.name)),
  };
}
