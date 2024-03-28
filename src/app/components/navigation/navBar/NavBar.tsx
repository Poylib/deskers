import Link from 'next/link';
import styles from './NavBar.module.scss';
import { NAV_CATEGORY } from '@/constants/navigation';

export default function NavBar() {
  return (
    <div className={styles.container}>
      <button>
        <span>OnTheDesk</span>
      </button>
      <div className={styles.category}>
        {NAV_CATEGORY.map((el, idx) => (
          <Link key={`${idx}_${el.id}`} href={el.href}>
            <span>{el.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
