import { BlogPosting, WithContext } from 'schema-dts';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd: WithContext<BlogPosting> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    author: {
      '@type': 'Person',
      name: 'poy',
      email: 'poy.alev@gmail.com',
    },
    image: 'img url',
    description: '컨텐츠 상세 페이지에 작성된 scheme 테스트',
    dateCreated: String(new Date()),
    dateModified: String(new Date()),
  };
  return (
    <>
      <section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </section>
    </>
  );
}
