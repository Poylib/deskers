import getConfig from 'next/config';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { eCategory } from './category';

interface ContentDictType {
  category: eCategory;
  fileName: string;
  title: string;
  date: Date;
  content: string;
}

const contentDict: { [key: number]: ContentDictType } = {
  1: { category: eCategory.KEYBOARD, fileName: '1_sample.md', title: '', date: new Date('2024-04-04'), content: '' },
};

export const getContentList = (idCategory: eCategory) => {
  const filteredList = [];

  for (const key in contentDict) {
    const item = contentDict[key];
    if (item.category === idCategory) {
      filteredList.push(item);
    }
  }
  return filteredList;
};

export async function getContentData(id: number) {
  const fullPath = path.join(process.cwd(), 'public/content', `${contentDict[id].fileName}`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string }),
  };
}
