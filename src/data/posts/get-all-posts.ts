import { Post } from '../model/type';
import { getPost } from './get-post';
import { getPaths } from './get-paths';

export const getAllPosts = async (): Promise<Post[]> => {
  return Promise.all(getPaths().map((postPath) => getPost(postPath)));
};