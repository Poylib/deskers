'use client';

import { useRouter } from 'next/navigation';

import { CategoryButton } from './CategoryButton';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { group } from 'console';

interface CategoryListProps {
  categoryList: {
    dirName: string;
    publicName: string;
    count: number;
  }[];
  allPostCount: number;
  currentCategory?: string;
  group?: string;
}

const CategoryList = ({ 
  categoryList, allPostCount, currentCategory = 'all' ,
  group,
}: CategoryListProps) => {
  const router = useRouter();

  const onCategoryChange = (value: string) => {
    router.push(value === "all" ? "/" : `?category=${value}`)
    // if (value === 'all') {
    //   router.push('/tail');
    // } else {
    //   router.push(`/tail/${value}`);
    // }
  };
  return (
    <>
      <section className="mb-10 hidden sm:block">
        <ul className="flex gap-3">
          <CategoryButton href={ group === undefined ? "/": `/${group}` } isCurrent={currentCategory === 'all'} displayName="All" count={allPostCount} />
          {categoryList.map((cg) => {
            const firstLetter = cg.publicName.charAt(0);
            const firstLetterCap = firstLetter.toUpperCase();
            const remainingLetters = cg.publicName.slice(1);
            const capitalizedWord = firstLetterCap + remainingLetters;
            return (
              <CategoryButton
                key={cg.dirName}
                href={`?category=${cg.dirName}`}
                displayName={capitalizedWord}
                isCurrent={cg.dirName === currentCategory}
                count={cg.count}
              />
            );
          })}
        </ul>
      </section>
      <section className="mb-10 sm:hidden">
        <Select onValueChange={onCategoryChange} defaultValue={currentCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All ({allPostCount})</SelectItem>
            {categoryList.map((cg) => (
              <SelectItem key={cg.dirName} value={cg.dirName}>
                {cg.publicName} ({cg.count})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </section>
    </>
  );
};

export default CategoryList;
