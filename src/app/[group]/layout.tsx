import { BLOG_NAME } from '@/lib/config/const';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { group: string } }): Promise<Metadata> {
  // read route params
  const group = params.group;

  // fetch dat

  return {
    title: `${group}에 관한 정보, 리뷰를 공유합니다. | ${BLOG_NAME}`,
    description: `${BLOG_NAME}가 직접 만든 ${group} 정보와 리뷰를 공유합니다.`,
  };
}

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
