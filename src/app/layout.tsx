import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/global.scss';
import Providers from './Providers';
import NavBar from './components/navigation/navBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'deskers',
  description: '현대인의 무대 위, 책상에서의 도전하고 성장하는 사람들의 워크 & 라이프 스타일 블로그, Deskers',
  verification: {
    google: 'ODJ6Nm0nKj7tf47xBaqZd8wrUx1nOZJZUq2YwLikXHo',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <NavBar />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
