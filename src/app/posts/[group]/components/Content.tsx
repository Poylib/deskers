'use client';
import Image from 'next/image';
import { ImageListItem, ImageListItemBar } from '@mui/material';
import Link from 'next/link';

import test from '@@/images/test.jpg';
import { usePathname, useRouter } from 'next/navigation';
import { Post, getLinkPath } from '../../../../data/posts';
import path from 'path';

type Props = {
  item: Post;
};

export default function Content({ item }: Props) {
  console.log(item.filepath)

  return (
    <Link href={`${item.filepath}`}>
      <ImageListItem style={{ cursor: 'pointer' }} onClick={() => {}}>
        <Image src={test} alt={item.title} loading="eager" placeholder="blur" style={{ objectFit: 'cover', width: '100%', height: 300 }} />
        <ImageListItemBar title={item.title} subtitle={<span>{item.content}</span>} position="below" />
      </ImageListItem>
    </Link>
  );
}
