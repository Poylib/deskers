import Card from './components/card/Card';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.sideBar}>
        <p>카테고리</p>
      </div>
      <div className={styles.container}>
        <div className={styles.category}>
          <span>전체 (1)</span>
        </div>
        <Card />
      </div>
    </main>
  );
}
