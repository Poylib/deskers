import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { baseDomain, blogDesc, blogName, blogThumbnailURL } from '../config/const';
import '@/lib/config/globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '../sections/ui/toaster';
import { Header } from '../layouts/Header';
import { Footer } from '../layouts/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(baseDomain),
  title: blogName,
  description: blogDesc,
  openGraph: {
    title: blogName,
    description: blogDesc,
    siteName: blogName,
    images: [blogThumbnailURL],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: blogName,
    description: blogDesc,
    images: [blogThumbnailURL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='h-full scroll-my-20 scroll-smooth' suppressHydrationWarning>
      <body className={cn(inter.className, 'flex min-h-screen flex-col')}>
        <ThemeProvider>
          <Header />
          <main className='mt-[64px] flex flex-1 flex-col'>{children}</main>
          <Footer />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
