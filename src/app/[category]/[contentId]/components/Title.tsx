import styles from './Title.module.scss';

export default function Title() {
  return (
    <div className={styles.container}>
      <h1>컨텐츠 제목</h1>
      <div className={styles.row}>
        <div>
          <span>카테고리</span>
          <span>작성일자</span>
        </div>
      </div>
    </div>
  );
}
