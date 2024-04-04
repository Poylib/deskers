import Title from './Title';

import styles from './Content.module.scss';
export default function Content() {
  return (
    <div className={styles.container}>
      <Title />
      <div>
        <p>few</p>
      </div>
    </div>
  );
}
