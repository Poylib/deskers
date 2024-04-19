'use client';
import Image from 'next/image';
import { ImageListItem, ImageListItemBar, Stack } from '@mui/material';
import Link from 'next/link';
import { Post } from '@/data/model/type';

type Props = {
  item: Post;
};

export default function Content({ item }: Props) {
  return (
    <Link href={`/${item?.uri}`}>
      <ImageListItem style={{ cursor: 'pointer' }} >
        <ImageListItemBar title={item.title} subtitle={<span>{removeMDXSyntax(item.content)}</span>}/>
          <Stack direction={'row'}>
            <Image
              src={item.thumbnail}
              alt={item.thumbnail}
              loading="eager"
              width={300}
              height={300}
              style={{ objectFit: 'cover', width: '100%', height: 300 }}
            />
          </Stack>
      </ImageListItem>
    </Link>
  );
}

// @TODO: 추후 외부 파일로 분리
function removeMDXSyntax(str: string) {
  // 굵은 텍스트, 이탤릭 텍스트 제거
  str = str.replace(/\*\*(.*?)\*\*/g, '$1'); // 굵은 텍스트
  str = str.replace(/\*(.*?)\*/g, '$1');     // 이탤릭 텍스트

  // 링크 제거 - 링크 텍스트만 남기고 URL 제거
  str = str.replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1');

  // 인라인 코드 제거
  str = str.replace(/`([^`]+)`/g, '$1');

  // 코드 블록 제거
  str = str.replace(/```[\s\S]*?```/g, '');

  // 헤더 제거
  str = str.replace(/#+\s*(.*)/g, '$1');

  // 이미지 제거
  str = str.replace(/!\[[^\]]*\]\([^)]*\)/g, '');

  // <br /> 제거
  str = str.replace(/<br\s*\/?>/gi, '')

  // 리스트 아이템 제거 ('-' 또는 '*'로 시작)
  str = str.replace(/^\s*[\-\*]\s+(.*)/gm, '$1');

  return str;
}
