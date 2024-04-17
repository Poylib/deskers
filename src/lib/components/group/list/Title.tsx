import { Group } from '@/data/model/type';
import { getCategories } from '@/data/posts';
import HashChips from '../hash-list/HashChips';
import styles from './Title.module.scss';

type Props = {
  group: Group;
};

export default async function Title(params: Props) {
  const { group } = params;
  const categories = await getCategories(group);
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>
          {group.displayName}
          <span> ({group.count})</span>
        </h2>
      </div>
      <HashChips categories={categories} />
    </div>
  );
}
