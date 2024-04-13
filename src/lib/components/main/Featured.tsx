import { ImageList } from '@mui/material';

import styles from './Featured.module.scss';
import { getAllPosts } from '@/data/posts';
import Content from '../group/hash-list/Content';

export default async function Featured() {
  const posts = await getAllPosts();
  return (
    <div className={styles.container}>
      <h2>Featured.</h2>
      <ImageList
        sx={{
          height: '100%',
          gridTemplateColumns: `repeat(auto-fill, minmax(200px, 1fr)) !important`,
        }}
        gap={12}
      >
        {posts.map((item, idx) => (
          <Content key={`${idx}`} item={item} />
        ))}
      </ImageList>
    </div>
  );
}
