import { eCategory, getCategoryList } from '@/api/category';
import Card from './Card';
import { getContentList } from '@/api/content';

export default function CardList() {
  const mock = ['/desk/1', '/desk/2'];

  const categoryList = getCategoryList();
  // const contentList = getContentList(eCategory.KEYBOARD);

  return (
    <>
      {mock.map((el, idx) => (
        <Card url={el} key={`${idx}`} />
      ))}
    </>
  );
}
