import { sync } from 'glob';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import dayjs from 'dayjs';
import { PostMatter } from './type';

const BASE_PATH = '/posts';
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

export const getLinkPath = (post: Post) => {
  return path.relative(process.cwd(), post.filepath);
};
export const getPaths = (group?: string) => {
  return sync(`${POSTS_PATH}/${group || '**'}/**/*.mdx`);
};

export const getSortedPosts = async (category?: string) => {
  return (await Promise.all(getPaths(category).map((postPath) => getPost(postPath)))).sort((a, b) => (a.date > b.date ? -1 : 1));
};

export interface Post extends PostMatter {
  category: string;
  content: string;
  filepath: string;
  readingMinutes: number;
}

export const getPostBySlug = async ({ group, slug }: { group: string; slug: string }): Promise<Post> => {
  const filepath = path.join(POSTS_PATH, group, slug);
  const mdx = matter(fs.readFileSync(filepath, 'utf8'));
  const grayMatter = mdx.data as PostMatter & { category: string };
  return {
    ...grayMatter,
    dateString: dayjs(grayMatter.date).locale('ko').format('YYYY년 MM월 DD일'),
    content: mdx.content,
    readingMinutes: Math.ceil(readingTime(mdx.content).minutes),
    filepath: path.relative(process.cwd(), filepath),
  };
};

export const getPost = async (filepath: string): Promise<Post> => {
  const mdx = matter(fs.readFileSync(filepath, 'utf8'));
  const grayMatter = mdx.data as PostMatter & { category: string };
  return {
    ...grayMatter,
    dateString: dayjs(grayMatter.date).locale('ko').format('YYYY년 MM월 DD일'),
    content: mdx.content,
    readingMinutes: Math.ceil(readingTime(mdx.content).minutes),
    filepath: path.relative(process.cwd(), filepath),
  };
};

export const getPosts = async ({ group, category }: { group?: string; category?: string } = {}): Promise<Post[]> => {
  const posts = await Promise.all(getPaths(group).map((postPath) => getPost(postPath)));
  return posts.filter((p) => p.category === category);
};

export const getAllPosts = async (): Promise<Post[]> => {
  return Promise.all(getPaths().map((postPath) => getPost(postPath)));
};

export async function getCategories(group: Group): Promise<
  Record<
    string,
    {
      count: number;
      url: string;
    }
  >
> {
  const result: {
    [key: string]: {
      url: string;
      count: number;
    };
  } = {};
  for (const post of sync(`${group.url}/**/*.mdx`)) {
    const { category, filepath } = await getPost(post);
    // console.log(group.url)
    if (!result[category]) {
      result[category] = { url: `${group.url}?category=${category}`, count: 0 };
    }
    if (result[category]) {
      result[category].count += 1;
    } else {
      result[category].count = 1;
    }
  }
  return result;
}

export type Group = {
  url: string;
  displayName: string;
  count: number;
};

export function getGroups() {
  const globs = sync(`${POSTS_PATH}/*`);
  const groups = globs.map((filepath) => {
    const displayName = fs.readFileSync(path.join(filepath, '_meta'), { encoding: 'utf-8' });
    const url = path.relative(process.cwd(), filepath);
    const glob = sync(`${url || '**'}/**/*.mdx`).length;
    return {
      url: path.relative(process.cwd(), filepath),
      displayName,
      count: glob,
    };
  });
  return groups;
}
