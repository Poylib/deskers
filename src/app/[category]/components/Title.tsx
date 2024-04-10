import HashChips from './HashChips';
import styles from './Title.module.scss';

export default function Title() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>데스크테리어</h2>
        <span>(4)</span> {/* 전체글 갯수 / tag query 변경시 해당 query에 해당하는 게시글 수 */}
      </div>
      <HashChips />
    </div>
  );
}
