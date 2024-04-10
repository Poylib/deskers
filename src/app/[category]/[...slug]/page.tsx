import 'github-markdown-css';
import { NavigationMenu } from '../../../lib/NavigationMenu';
import { createDirectoryItems } from '../../../data/get-list';
import { getContentData } from '../../../data/read-data';
import Thumbnail from './\bcomponents/Thumbnail';
import ContentHeader from './\bcomponents/ContentHeader';

import styles from './page.module.scss';
import Content from './\bcomponents/Content';

export default async function Page({ params, searchParams }: any) {
  const { slug } = params;
  console.log('🚀 ~ Page ~ slug:', slug);
  const category = slug[0];
  // const data = await createDirectoryItems(`resources/${category}`);
  // const data = await createDirectoryItems(`resources`);
  return (
    <main className={styles.container}>
      <Thumbnail />
      <div style={{ maxWidth: 900, margin: 'auto', width: '100%' }}>
        <ContentHeader />
        <Content />
      </div>
    </main>
  );
}
