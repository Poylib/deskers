import { sync } from 'glob';
import path from 'path';
import fs from 'fs';
import { Group, HashTag } from '../model/type';
import { POSTS_PATH } from '@/config';
import { getPost } from './get-post';

export async function getCategories(group: Group): Promise<Record<string, HashTag>> {
  return sync(`${POSTS_PATH}/${group.category}/**/*.mdx`).reduce(async (_acc: Promise<Record<string, HashTag>>, curr) => {
    const result = await _acc;
    const { category } = await getPost(curr);
    if (!result[category]) {
      result[category] = { url: `${group.category}?category=${category}`, count: 1 };
    } else {
      result[category].count += 1;
    }
    return result;
  }, Promise.resolve({}));
}

export function getGroups(): Group[] {
  return sync('posts/*', { absolute: false })
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
}
