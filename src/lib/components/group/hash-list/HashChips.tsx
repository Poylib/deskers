import styles from './HashChips.module.scss';
import Link from 'next/link';

export default async function HashChips({ categories }: { categories: Record<string, { url: string; count: number }> }) {
  return (
    <div className={styles.row}>
      {Object.entries(categories).map(([category, { url, count }], idx) => {
        return (
          <Link key={idx} href={url}>
            #{category} ({count}) &nbsp;
          </Link>
        );
      })}
    </div>
  );
}
