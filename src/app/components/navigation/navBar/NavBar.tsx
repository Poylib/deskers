import Link from 'next/link';

import styles from './NavBar.module.scss';
import { getGroups } from '../../../../data/posts';

export default async function NavBar() {
  const groups = getGroups()
  return (
    <header className={styles.container}>
      <Link href={'/'}>
        <span>Deskers</span>
      </Link>
      <div className={styles.category}>
        <Link href={`/about`}>
          <span>ABOUT</span>
        </Link>
        {groups.map((el, idx) => (
          <Link key={`${idx}`} href={`/${el.url}`}>
            <span>{el.displayName}</span>
          </Link>
        ))}
      </div>
    </header>
  );
}
