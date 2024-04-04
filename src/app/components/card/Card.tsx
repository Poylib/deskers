import styles from './Card.module.scss';

export default function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.thumbnail} />
        <div className={styles.content}>
          <h3>title</h3>
          <p>content</p>
        </div>
      </div>
    </div>
  );
}
