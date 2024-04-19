import { sync } from 'glob';
import { HashTag } from '../model/type';
import { POSTS_PATH } from '../config';
import { getPost } from './get-post';

export async function getCategories(category?: string): Promise<Record<string, HashTag>> {
  const path = category === undefined ? `${POSTS_PATH}/**/*.mdx` : `${POSTS_PATH}/${category}/**/*.mdx`;
  const list = await sync(path).reduce(async (_acc: Promise<Record<string, HashTag>>, curr) => {
    const result = await _acc;
    const { category } = await getPost(curr);
    if (!result[category]) {
      result[category] = { url: `${category}?category=${category}`, count: 1 };
    } else {
      result[category].count += 1;
    }
    return result;
  }, Promise.resolve({}));
  return list;
}
