import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Post } from '../../../../../data/posts';

import styles from './ContentHeader.module.scss';

export default function ContentHeader({ post }: { post: Post }) {
  return (
    <div className={styles.container}>
      <span className={styles.categoryName}>{post.category}</span>
      <h1>{post.title}</h1>
      <div className={styles.date}>
        <CalendarTodayIcon sx={{ fontSize: 20 }} />
        <span>{post.dateString}</span>
      </div>
      <span>읽는 시간 {post.readingMinutes} 분</span>
    </div>
  );
}
