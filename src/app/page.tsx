import Featured from '../lib/components/main/Featured';
import Tags from '../lib/components/main/Tags';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h2>Deskers.</h2>
        <p>책상 위 평범한 삶, 그 이상의 가치를 함께 추구합니다.</p>
      </div>
      <div className={styles.content}>
        <Featured />
        <Tags />
      </div>
    </div>
  );
}
