import React from 'react';

import styles from './page.module.scss';
import { getGroups, getPosts } from '@/data/posts';
import Title from '@/lib/components/group/list/Title';
import ContentList from '@/lib/components/group/list/ContentList';
import { Group } from '@/data/model/type';

export default async function Category({ params, searchParams }: any) {
  const { group: _group } = params;
  const group = getGroups().find((group) => group.category.includes(_group))! as Group;
  const posts = await getPosts({
    group: group.category,
    category: searchParams.category,
  })
  return (
    <main className={styles.main}>
      <Title group={group} />
      <ContentList posts={posts} />
    </main>
  );
}
