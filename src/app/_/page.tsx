import ContentList from '../components/card/ContentList';
import SideBar from '../components/navigation/sideBar';

import styles from './page.module.scss';

export default function Category() {
  return (
    <main className={styles.main}>
      <SideBar />
      <ContentList />
    </main>
  );
}
