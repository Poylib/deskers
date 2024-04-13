'use client';
import Image from 'next/image';
import { ImageListItem, ImageListItemBar } from '@mui/material';
import Link from 'next/link';

import { Post } from '../../data/posts';

type Props = {
  item: Post;
};

export default function Content({ item }: Props) {
  return (
    <Link href={`${item?.filepath?.split('/').slice(1).join('/')}`}>
      <ImageListItem style={{ cursor: 'pointer' }} onClick={() => {}}>
        <Image
          src={item.thumbnail}
          alt={item.thumbnail}
          loading="eager"
          width={300}
          height={300}
          style={{ objectFit: 'cover', width: '100%', height: 300 }}
        />
        <ImageListItemBar title={item.title} subtitle={<span>{item.content}</span>} position="below" />
      </ImageListItem>
    </Link>
  );
}
