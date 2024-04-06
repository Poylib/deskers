import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { DirectoryItem } from './model/directory-item';

const asyncFs = fs.promises;

export async function createDirectoryItems(dir: string, category = ''): Promise<DirectoryItem[]> {
  const dirents = await asyncFs.readdir(dir, { withFileTypes: true });
  const items: DirectoryItem[] = [];

  for (const dirent of dirents) {
    const res = path.resolve(dir, dirent.name);
    const id = path.relative(process.cwd(), path.join(dir, dirent.name));
    const itemCategory = path.join(category, dirent.name).replace('\b', '');
    const type = dirent.isDirectory() ? 'directory' : 'file';

    let children: DirectoryItem[] | undefined = undefined;
    if (dirent.isDirectory()) {
      children = await createDirectoryItems(res, itemCategory);
      const name = await (async () => {
        if (fs.existsSync(path.join(id, '.meta'))) {
          const fileContents = await asyncFs.readFile(path.join(id, '.meta'), 'utf8');
          return fileContents.trim();
        } else {
          return dirent.name;
        }
      })();
      items.push({
        id: id.replace('\b', ''),
        category: itemCategory,
        name,
        type,
        children,
      });
    } else {
      if (path.extname(id) === '.md') {
        const fileContents = await asyncFs.readFile(id, 'utf8');
        const matterResult = matter(fileContents) as unknown as { data: { title: string } };
        const item: DirectoryItem = {
          id: id.replace('\b', ''),
          category: itemCategory,
          name: matterResult.data.title,
          type,
          children,
        };
        items.push(item);
      }
    }
  }
  return items;
}
