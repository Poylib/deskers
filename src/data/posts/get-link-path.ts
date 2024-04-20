import path from 'path';
import { Post } from '../model/type';

export function getLinkPath (post: Post): string {
  return path.relative(process.cwd(), post.uri);
};
