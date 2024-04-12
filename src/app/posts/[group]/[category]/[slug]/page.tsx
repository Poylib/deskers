import 'github-markdown-css';
import ContentHeader from './components/ContentHeader';

import styles from './page.module.scss';
import Content from './components/Content';

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
