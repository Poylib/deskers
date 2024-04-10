'use client';
import Image from 'next/image';
import { ImageListItem, ImageListItemBar } from '@mui/material';

import test from '@@/images/test.jpg';
import { usePathname, useRouter } from 'next/navigation';

export default function Content({ item }) {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <ImageListItem style={{ cursor: 'pointer' }} onClick={() => router.push(`${pathName}/home-appliances`)}>
      <Image src={test} alt={item.title} loading="eager" placeholder="blur" style={{ objectFit: 'cover', width: '100%', height: 300 }} />
      <ImageListItemBar title={item.title} subtitle={<span>{item.content}</span>} position="below" />
    </ImageListItem>
  );
}
