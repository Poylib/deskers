import { sync } from 'glob';
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
