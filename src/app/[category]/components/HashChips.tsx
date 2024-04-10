'use client';

import styles from './HashChips.module.scss';
import { usePathname, useRouter } from 'next/navigation';

export default function HashChips() {
  const router = useRouter();
  const pathname = usePathname();

  const mock = [
    { tag: '마우스', url: 'mouse' },
    { tag: '키보드', url: 'keyboard' },
    { tag: '모니터', url: 'monitor' },
    { tag: '책상', url: 'desk' },
  ];

  return (
    <div className={styles.row}>
      {mock.map((item, idx) => (
        <button key={`${idx}`} onClick={() => router.replace(`${pathname}?tag=${item.url}`)}>
          #{item.tag}
        </button>
      ))}
    </div>
  );
}
