import { sync } from 'glob';
import fs from 'fs';
import matter from 'gray-matter';

export function getHashTags({ group }: { group?: string } = {}): {
  category: string;
  displayName: string;
  count: number;
}[] {
  const result: Record<string, { category: string; displayName: string; count: number }> = {};
  for (const filepath of sync(group === undefined ? sync('posts/**/*.mdx', { absolute: false }) : sync(`posts/${group}/*.mdx`, { absolute: false }), {
    absolute: false,
  })) {
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
