import { sync } from 'glob';
import fs from 'fs';
import matter from 'gray-matter';

export function getHashTags({ group, category }: { group?: string; category?: string } = {}): {
  category: string;
  displayName: string;
  count: number;
}[] {
  const result: Record<string, { category: string; displayName: string; count: number }> = {};
  if (group === undefined) {
    for (const filepath of sync('posts/**/*.mdx', { absolute: false })) {
      const mdx = matter(fs.readFileSync(filepath, 'utf8'));
      if (result[mdx.data.category] === undefined) {
        result[mdx.data.category] = {
          category: mdx.data.category,
          displayName: mdx.data.category,
          count: 1,
        };
      } else {
        result[mdx.data.category].count += 1;
      }
    }
    return Object.values(result);
  } else {
    // console.log(sync(`posts/${group}/*.mdx`, { absolute: false }));
    for (const filepath of sync(`posts/${group}/*.mdx`, { absolute: false })) {
      const mdx = matter(fs.readFileSync(filepath, 'utf8'));
      if (result[mdx.data.category] === undefined) {
        result[mdx.data.category] = {
          category: mdx.data.category,
          displayName: mdx.data.category,
          count: 1,
        };
      } else {
        result[mdx.data.category].count += 1;
      }
    }
    return Object.values(result);
  }
}
