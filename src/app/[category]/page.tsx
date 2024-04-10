import React from 'react';
import Title from './components/Title';
import ContentList from './components/ContentList';

import styles from './page.module.scss';

export default function Category() {
  return (
    <main className={styles.main}>
      <Title />
      <ContentList />
    </main>
  );
}
