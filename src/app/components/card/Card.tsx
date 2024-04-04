'use client';
import { useRouter } from 'next/navigation';
import styles from './Card.module.scss';

export default function Card({ url }: { url: string }) {
  const router = useRouter();
  return (
    <div className={styles.container} onClick={() => router.push(url)}>
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
