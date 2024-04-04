import Card from './components/card/Card';
import styles from './page.module.scss';

export default function Home() {
  const mock = ['/desk/1', '/desk/2'];

  return (
    <main className={styles.main}>
      <aside className={styles.sideBar}>
        <p>카테고리</p>
      </aside>
      <div className={styles.container}>
        <div className={styles.category}>
          <span>전체 (1)</span>
        </div>
        {mock.map((el, idx) => (
          <Card url={el} key={`${idx}`} />
        ))}
      </div>
    </main>
  );
}
