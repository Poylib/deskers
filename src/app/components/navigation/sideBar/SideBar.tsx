import Link from 'next/link';

import styles from './SideBar.module.scss';

export default function SideBar() {
  return (
    <aside className={styles.sideBar}>
      <ul>
        {/* {sortedCategoryList.map((v, index) => {
          // console.log('v :', v);
          return (
            <li key={index} style={{ paddingLeft: `${v.depth * 10}px` }}>
              <Link href={`/${v.uri}`}>{v.name}</Link>
            </li>
          );
        })} */}
      </ul>
    </aside>
  );
}
