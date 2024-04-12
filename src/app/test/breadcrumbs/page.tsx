import { createDirectoryItems } from '@/data/get-list';
import { getContentData } from '@/data/read-data';
import Link from 'next/link';
import React from 'react';
import styles from "./page.module.scss"

type Props = {
}

interface Category {
  id: string;
  category: string;
  name: string;
  type: string;
  children?: Category[];
}

interface ParentInfo {
  id: string;
  name: string;
}

const testBreadcrumbs = async (props:Props) => {
  const id = ["desk","home-appliances","keyboard"]
  const categoryList:Category[] = await createDirectoryItems(`resources`);
  console.log("categoryList : ",JSON.stringify(categoryList));
  const data  = await getContentData(id);
  console.log("data : ",data)

  function findParentIds(id: string, data: Category[], parentIds: ParentInfo[] = []): ParentInfo[] | undefined {
    console.log("id : ",id)
    for (const item of data) {
        console.log("findParentIds : ",item.id,id);
        if (item.id.replace(".md","") === id) {
            return parentIds;
        }
        if (item.children) {
            const foundInChild = findParentIds(id, item.children, [...parentIds, { id: item.id, name: item.name }]);
            if (foundInChild) {
                return foundInChild;
            }
        }
    }
}

const parentIds = findParentIds(`resources\\`+id.join("\\"), categoryList);
console.log(parentIds);
  return (
    <>
      <ul className={styles.breadcrumbs}>
        {parentIds?.map((one,index)=>{
          const url = one.id.replace("resources\\", "/");
          return <li key={index} className={styles.item}><Link href={url}>{one.name}</Link></li>
        })}
      </ul>
    </>
  );
};

export default testBreadcrumbs;