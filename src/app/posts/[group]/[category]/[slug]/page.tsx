import 'github-markdown-css';
import { NavigationMenu } from '../../../../../lib/NavigationMenu';
import { createDirectoryItems } from '../../../../../data/get-list';
import { getContentData } from '../../../../../data/read-data';
import Thumbnail from './\bcomponents/Thumbnail';
import ContentHeader from './\bcomponents/ContentHeader';

import styles from './page.module.scss';
import Content from './\bcomponents/Content';

export default async function Page({ params, searchParams }: any) {
  return (
    <main className={styles.container}>
      <div style={{ maxWidth: 900, margin: 'auto', width: '100%' }}>
        <ContentHeader />
        <Content />
      </div>
    </main>
  );
}
