'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ContentList() {
  const pathname = usePathname();

  return (
    <Link href={`${pathname}/1`}>
      <span>컨텐츠 상세</span>
    </Link>
  );
}
