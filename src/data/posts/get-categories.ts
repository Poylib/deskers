import { sync } from 'glob';
import path from 'path';
import fs from 'fs';
import { Group } from '../model/type';
import { POSTS_PATH } from '@/config';
import { getPost } from './get-post';

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
  for (const post of sync(`${POSTS_PATH}/${group.category}/**/*.mdx`)) {
    const { category } = await getPost(post);
    if (!result[category]) {
      result[category] = { url: `${group.category}?category=${category}`, count: 0 };
    }
    if (result[category]) {
      result[category].count += 1;
    } else {
      result[category].count = 1;
    }
  }
  return result;
}

export function getGroups(): Group[] {
  const groups = sync('posts/*', { absolute: false })
    .map((filepath) => path.basename(filepath))
    .map((category) => {
      const displayName = fs.readFileSync(path.join(POSTS_PATH, category, '_meta'), { encoding: 'utf-8' });
      const glob = sync(`${path.join(POSTS_PATH, category) || '**'}/**/*.mdx`).length;
      return {
        category,
        displayName,
        count: glob,
      };
    });
  return groups;
}