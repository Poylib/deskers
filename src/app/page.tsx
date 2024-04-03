import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.category}>
          <span>전체 (4)</span>
        </div>
        <div className={styles.card}>
          <div className={styles.thumbnail} />
        </div>
      </div>
    </main>
  );
}
