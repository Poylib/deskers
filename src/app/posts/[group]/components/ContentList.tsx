import { ImageList } from '@mui/material';
import Content from './Content';

import styles from './ContentList.module.scss';
import { Post, getCategories } from '../../../../data/posts';

type Props = {
  posts: Post[];
};

export default function ContentList({ posts }: Props) {
  return (
    <section className={styles.container}>
      <ImageList sx={{ height: '100%', gridTemplateColumns: `repeat(auto-fill, minmax(200px, 1fr)) !important` }} gap={12}>
        {posts.map((item, idx) => (
          <Content key={`${idx}`} item={item} />
        ))}
      </ImageList>
    </section>
  );
}
