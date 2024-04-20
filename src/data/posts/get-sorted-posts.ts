import { getPaths } from './get-paths';
import { getPost } from './get-post';

export async function getSortedPosts(category?: string) {
  return (await Promise.all(getPaths(category).map((postPath) => getPost(postPath)))).sort((a, b) => (a.date > b.date ? -1 : 1));
}
