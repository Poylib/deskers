// // import { getGroups } from "./data/posts";

// import { sync } from 'glob';
// import path from 'path';
// import fs from 'fs';
// import { getPost } from './data/posts';
// import matter from 'gray-matter';

// void (async () => {
//   const result: Record<string, { category: string; displayName: string; count: number }> = {};
//   for (const filepath of sync('posts/**/*.mdx', { absolute: false })) {
//     const mdx = matter(fs.readFileSync(filepath, 'utf8'));
//     if (result[mdx.data.category] === undefined) {
//       result[mdx.data.category] = {
//         category: mdx.data.category,
//         displayName: mdx.data.category,
//         count: 1,
//       };
//     } else {
//       result[mdx.data.category].count += 1;
//     }
//   }
//   console.log(Object.values(result));
// })();
