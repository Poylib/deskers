import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export async function getContentData(id: string[]) {
    const fullPath = `${path.join(process.cwd(), 'resources', ...id)}.md`;
    const fileContents = fs.readFileSync(fullPath, 'utf8');
  
    const matterResult = matter(fileContents);
  
    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();
  
    return {
      id,
      contentHtml,
      ...(matterResult.data as { date: string; title: string }),
    };
  }