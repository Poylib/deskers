import { sync } from 'glob';
import { POSTS_PATH } from '../config';

export const getPaths = (group?: string) => {
  return sync(`${POSTS_PATH}/${group || '**'}/**/*.mdx`);
};
