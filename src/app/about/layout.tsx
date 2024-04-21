import { BASE_DOMAIN, BLOG_NAME } from '@/lib/config/const';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_DOMAIN),
  title: `deskers 소개 | ${BLOG_NAME}`,
  description: '매일 도전과 성장하는 직장인들을 위한 워크&라이프 스타일 블로그입니다.',
};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
