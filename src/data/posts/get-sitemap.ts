import { getPosts } from "./get-posts";

export const getSitemapPostList = async () => {
  const posts = await getPosts();
  const baseUrl = 'https:/deskers.io';
  const sitemapPostList = posts.map(({ uri }) => ({
    lastModified: new Date(),
    url: `${baseUrl}${uri}`,
  }));
  return sitemapPostList;
};