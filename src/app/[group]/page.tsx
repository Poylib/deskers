import React from 'react';

import { getPosts } from '@/data/posts';
import Title from '@/lib/components/group/list/Title';
import ContentList from '@/lib/components/group/list/ContentList';
import { Group } from '@/data/model/type';
import { getGroups } from '@/data/posts/get-groups';

export default async function Category({ params, searchParams }: any) {
  const { group: _group } = params;
  const group = getGroups().find((group) => group.category.includes(_group))! as Group;
  console.log('group : undefined', group);
  if (!group) return;
  const posts = await getPosts({
    group: group.category,
    category: searchParams.category,
  });
  return (
    <main>
      <Title group={group} />
      <ContentList posts={posts} />
    </main>
  );
}
