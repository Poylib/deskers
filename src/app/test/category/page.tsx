import { categoryHierarchy, eCategory, getCategoryList } from '@/api/category';
import { getContentData, getContentList } from '@/api/content';
import React, { useState } from 'react';
import 'github-markdown-css';

type Props = {};

const test_category = async (props: Props) => {
  const categoryList = getCategoryList();
  console.log('categoryList : ', categoryList);
  const contentList = getContentList(eCategory.KEYBOARD);
  console.log('contentList : ', contentList);
  const contentData = await getContentData(1);
  console.log('contentData : ', contentData);

  const sortedCategoryList: any[] = Object.values(
    Object.fromEntries(Object.entries(categoryList.categoryDict).sort(([, categoryA], [, categoryB]) => categoryA.depth - categoryB.depth))
  );
  console.log('sortedCategoryList : ', sortedCategoryList);

  return (
    <>
      <nav>
        <ul className="categoryList">
          {sortedCategoryList.map((v, index) => {
            console.log('v :', v);
            return (
              <li key={index} style={{ padding: `${v.depth * 10}px` }}>
                {v.name}
              </li>
            );
          })}
        </ul>
      </nav>
      <h1>{contentData.title}</h1>
      <div>{contentData.date}</div>
      <div className={'markdown-body'} dangerouslySetInnerHTML={{ __html: contentData.contentHtml }} />
    </>
  );
};

export default test_category;
