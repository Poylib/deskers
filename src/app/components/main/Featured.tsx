import { ImageList } from '@mui/material';
import Content from '@/app/posts/[group]/components/Content';

import styles from './Featured.module.scss';

export default function Featured() {
  const itemData = [
    {
      title: '로지텍 마우스',
      content: '로지텍에서 나온 마우스 어쩌구 저쩌구',
    },
    {
      title: '기계식 키보드란',
      content:
        '키보드의 한 종류. 기계식 키보드(Mechanical Keyboard)의 정의는 통일되어 있지 않으나 통상적으로는 아래의 조건을 모두 만족하면 기계식 키보드로 분류한다.',
    },
    {
      title: 'Camera',
      content: '@helloimnik',
    },
  ];
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
        {itemData.map((item, idx) => (
          <Content key={`${idx}`} item={item} />
        ))}
      </ImageList>
    </div>
  );
}
