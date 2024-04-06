import Card from './components/card/Card';
import ContentList from './components/card/ContentList';
import SideBar from './components/navigation/sideBar';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <SideBar />
      <ContentList />
    </main>
  );
}
