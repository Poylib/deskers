import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import styles from './ContentHeader.module.scss';

export default function ContentHeader() {
  return (
    <div className={styles.container}>
      <span className={styles.categoryName}>데스크테리어</span>
      <h1>Content Title</h1>
      <div className={styles.date}>
        <CalendarTodayIcon sx={{ fontSize: 20 }} />
        <span>2024.04.11</span>
      </div>
      <span>by. poy</span>
    </div>
  );
}
