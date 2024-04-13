import styles from './page.module.scss';
import Content from '@/lib/components/detail/Content';
import ContentHeader from '@/lib/components/detail/ContentHeader';
import { getPostBySlug } from '@/data/posts';
import Thumbnail from '@/lib/components/detail/Thumbnail';

const Page = async ({ params }: any) => {
  const { group, slug } = params;

  const post = await getPostBySlug({ group, slug });
  return (
    <main className={styles.container}>
      <div style={{ maxWidth: 900, margin: 'auto', width: '100%' }}>
        <Thumbnail img={post.thumbnail} />
        <ContentHeader post={post} />
        <Content post={post} />
      </div>
    </main>
  );
};

export default Page;
