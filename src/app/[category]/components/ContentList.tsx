import Image from 'next/image';
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import styles from './ContentList.module.scss';

import test from '@@/images/test.jpg';

export default function ContentList() {
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
    {
      title: 'Coffee',
      content: '@nolanissac',
    },
    {
      title: 'Hats',
      content: '@hjrc33',
    },
  ];
  return (
    <section className={styles.container}>
      <ImageList sx={{ height: '100%', gridTemplateColumns: `repeat(auto-fill, minmax(200px, 1fr)) !important`, cursor: 'pointer' }} gap={12}>
        {itemData.map((item, idx) => (
          <ImageListItem key={idx}>
            <Image src={test} alt={item.title} loading="eager" placeholder="blur" style={{ objectFit: 'cover', width: '100%', height: 300 }} />
            <ImageListItemBar title={item.title} subtitle={<span>{item.content}</span>} position="below" />
          </ImageListItem>
        ))}
      </ImageList>
    </section>
  );
}
