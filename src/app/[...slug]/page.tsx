import 'github-markdown-css';
import { NavigationMenu } from '../../lib/NavigationMenu';
import { createDirectoryItems } from '../../data/get-list';
import { getContentData } from '../../data/read-data';

export default async function Page({ params, searchParams }: any) {
  const { slug } = params;
  const category = slug[0];
  // const data = await createDirectoryItems(`resources/${category}`);
  const data = await createDirectoryItems(`resources`);
  if (searchParams.query === 'read') {
    const content = await getContentData(slug);
    return (
      <>
        <NavigationMenu params={data} />
        <div style={{ marginLeft: '300px' }} className={'markdown-body'} dangerouslySetInnerHTML={{ __html: content.contentHtml }} />
      </>
    );
  } else {
    return <NavigationMenu params={data} />;
  }
}
