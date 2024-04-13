import path from 'path';
import { Post } from '../model/type';

export const getLinkPath = (post: Post) => {
  return path.relative(process.cwd(), post.filepath);
};
