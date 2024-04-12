'use client';

import { remark } from 'remark';
import html from 'remark-html';
import styles from './Content.module.scss';
import { useEffect, useState } from 'react';

export default function Content({ post }: { post: Post }) {
  const [htmlContent, setHtmlContent] = useState<string>('');

  useEffect(() => {
    const fetchHtmlContent = async () => {
      const result = await remark().use(html).process(post.content);
      setHtmlContent(result.toString());
    };

    fetchHtmlContent();
  }, [post.content]);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
