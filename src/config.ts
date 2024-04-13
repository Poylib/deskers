import path from 'path';

export const BASE_PATH = '/posts';
export const POSTS_PATH = path.join(process.cwd(), BASE_PATH);
export const POST_EXT = '.mdx'