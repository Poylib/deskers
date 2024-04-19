import { sync } from 'glob';
import path from 'path';
import fs from 'fs';
import { Group } from '../model/type';
import { POSTS_PATH } from '../config';

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
