import { BLOG_NAME } from '@/lib/config/const';
import { getPostBySlug } from '@/lib/data/posts';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { group: string; slug: string } }): Promise<Metadata> {
  // read route params
  const { group, slug } = params;
  const post = await getPostBySlug({ group, slug });

  // fetch dat

  return {
    title: `${post.title} | ${BLOG_NAME}`,
    description: `${post.title}`,
  };
}

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
