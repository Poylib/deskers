import { getPosts } from './get-posts';

export async function getSitemapPostList(): Promise<
  {
    lastModified: Date;
    url: string;
  }[]
> {
  const posts = await getPosts();
  const baseUrl = 'https:/deskers.io';
  const sitemapPostList = posts.map(({ uri }) => ({
    lastModified: new Date(),
    url: `${baseUrl}${uri}`,
  }));
  return sitemapPostList;
}
