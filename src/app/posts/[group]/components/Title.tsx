import { Group, getCategories } from '../../../../data/posts';
import HashChips from './HashChips';
import styles from './Title.module.scss';

type Props = {
  group: Group;
};

export default async function Title(params: Props) {
  const { group } = params;
  const categories = await getCategories(group)
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>{group.displayName} ({group.count})</h2>
      </div>
      <HashChips categories={categories} />
    </div>
  );
}
