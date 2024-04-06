import Link from 'next/link';

import styles from './NavBar.module.scss';

export default async function NavBar() {
  return (
    <div className={styles.container}>
      <Link href={'/'}>
        <span>Deskers</span>
      </Link>
      <div className={styles.category}>
        <Link href={`/about`}>
          <span>ABOUT</span>
        </Link>
        {[
          {
            name: '데스크테리어',
            uri: 'desk',
          },
          {
            name: '생활/건강',
            uri: 'life',
          },
          {
            name: '오피스',
            uri: 'office',
          },
        ].map((el, idx) => (
          <Link key={`${idx}_${el.name}`} href={`/${el.uri}`}>
            <span>{el.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
