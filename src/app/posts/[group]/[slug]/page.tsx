import styles from './page.module.scss';
import Content from './components/Content';
import ContentHeader from './components/ContentHeader';
import { getPostBySlug, getPosts } from '../../../../data/posts';

const Page = async ({ params }: any) => {
  const { group, slug } = params;

  const post = await getPostBySlug({ group, slug });
  return (
    <main className={styles.container}>
      <div style={{ maxWidth: 900, margin: 'auto', width: '100%' }}>
        <ContentHeader post={post} />
        <Content post={post} />
      </div>
    </main>
  );
};

export default Page;
