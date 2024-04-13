import { Post } from "../model/type";
import { getPaths } from "./get-paths";
import { getPost } from "./get-post";

export const getPosts = async ({ group, category }: { group?: string; category?: string } = {}): Promise<Post[]> => {
  return category !== undefined
    ? (await Promise.all(getPaths(group).map((postPath) => getPost(postPath)))).filter((p) => p.category === category)
    : Promise.all(getPaths(group).map((postPath) => getPost(postPath)));
};
