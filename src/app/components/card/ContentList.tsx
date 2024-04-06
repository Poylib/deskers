'use client';
import { usePathname } from 'next/navigation';
import Card from './Card';
import styles from './ContentList.module.scss';
import { useMemo } from 'react';
import { getCategoryList } from '@/api/category';
import CardList from './CardList';

export default function ContentList() {
  const pathname = usePathname();

  const title = useMemo(() => {
    const path = pathname.substring(1);
    if (!path) {
      return '전체';
    } else {
      const list = getCategoryList();
      const item = Object.values(list.categoryDict).find((item) => item.uri.toLowerCase() === path.toLowerCase());

      return item?.name;
    }
  }, [pathname]);

  return (
    <div className={styles.container}>
      <div className={styles.category}>
        <span>{title} (1)</span>
      </div>
      <CardList />
    </div>
  );
}
