'use client';

import { useRouter } from 'next/navigation';

import { CategoryButton } from './CategoryButton';

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

const CategoryList = ({ categoryList, allPostCount, currentCategory = 'all', group }: CategoryListProps) => {
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    router.push(value === 'all' ? '/' : `?category=${value}`);
  };

  return (
    <>
      <section className="mb-10 hidden sm:block">
        <ul className="flex gap-3">
          <CategoryButton
            href={group === undefined ? '/' : `/${group}`}
            isCurrent={currentCategory === 'all'}
            displayName="All"
            count={allPostCount}
          />
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
        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
        <select
          id="countries"
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value={'all'} className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
            all ({categoryList.map((c) => c.count)})
          </option>
          {categoryList.map((cg, idx) => {
            return (
              <option value={cg.dirName} className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" key={idx}>
                {cg.publicName} ({cg.count})
              </option>
            );
          })}
        </select>
      </section>
    </>
  );
};

export default CategoryList;
