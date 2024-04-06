import Link from 'next/link';
import { getCategoryList } from '@/api/category';

import styles from './NavBar.module.scss';

export default async function NavBar() {
  const categoryList = getCategoryList();

  const depth0Elements = Object.values(categoryList.categoryDict).filter((item) => item.depth === 0);

  return (
    <div className={styles.container}>
      <Link href={'/'}>
        <span>Deskers</span>
      </Link>
      <div className={styles.category}>
        <Link href={`/about`}>
          <span>ABOUT</span>
        </Link>
        {depth0Elements.map((el, idx) => (
          <Link key={`${idx}_${el.name}`} href={`/${el.uri}`}>
            <span>{el.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
