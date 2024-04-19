import Content from '@/lib/components/detail/Content';
import ContentHeader from '@/lib/components/detail/ContentHeader';
import { getPostBySlug } from '@/data/posts';
import Thumbnail from '@/lib/components/detail/Thumbnail';
import Container from '@/core/layout/Container';
import BreadCrumbs from '@/lib/components/breadcrumbs/BreadCrumbs';

const Page = async ({ params }: any) => {
  const { group, slug } = params;

  const post = await getPostBySlug({ group, slug });
  return (
    <Container>
      <BreadCrumbs group={group} slug={slug}/>
      <Thumbnail img={post.thumbnail} />
      <ContentHeader post={post} />
      <Content post={post} />
    </Container>
  );
};

export default Page;
