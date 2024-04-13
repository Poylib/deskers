import React from 'react';

import styles from './page.module.scss';
import { Group, getGroups, getPosts } from '../../../data/posts';
import Title from '../../../lib/components/group/Title';
import ContentList from '../../../lib/components/group/ContentList';

export default async function Category({ params, searchParams }: any) {
  const { group: _group } = params;
  const group = getGroups().find((group) => group.url.includes(_group))! as Group;
  if (searchParams.category) {
    const posts = await getPosts({
      group: _group,
      category: searchParams.category,
    });
    return (
      <main className={styles.main}>
        <Title group={group} />
        <ContentList posts={posts} />
      </main>
    );
  }
  return (
    <main className={styles.main}>
      <Title group={group} />
      {/* <ContentList category={group} /> */}
    </main>
  );
}
