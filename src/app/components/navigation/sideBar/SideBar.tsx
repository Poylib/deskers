import Link from 'next/link';
import { getCategoryList } from '@/api/category';

import styles from './SideBar.module.scss';

export default function SideBar() {
  const categoryList = getCategoryList();
  const sortedCategoryList: any[] = Object.values(
    Object.fromEntries(Object.entries(categoryList.categoryDict).sort(([, categoryA], [, categoryB]) => categoryA.depth - categoryB.depth))
  );
  return (
    <aside className={styles.sideBar}>
      <ul>
        {sortedCategoryList.map((v, index) => {
          // console.log('v :', v);
          return (
            <li key={index} style={{ paddingLeft: `${v.depth * 10}px` }}>
              <Link href={`/${v.uri}`}>{v.name}</Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
