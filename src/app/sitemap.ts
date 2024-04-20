import { MetadataRoute } from 'next';
import { getSitemapPostList } from '../data/posts/get-sitemap';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postList = await getSitemapPostList();
  const baseUrl = 'https://deskers.io';
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...postList,
  ];
}
