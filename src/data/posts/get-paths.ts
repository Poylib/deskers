import { sync } from 'glob';
import { POSTS_PATH } from '../config';

export function getPaths(group?: string): string[] {
  return sync(`${POSTS_PATH}/${group || '**'}/**/*.mdx`);
}
