import React from 'react';
import { getGroups, getPosts } from '../../data/posts';
import { Group } from '../../data/model/type';
import PostListSection from '../../sections/PostListSection';
import { getHashTags } from '../../data/posts/get-all-hash-tags';

export default async function Category({ params, searchParams }: any) {
  const { group: _group } = params;
  const { category } = searchParams;
  const group = getGroups().find((group) => group.category.includes(_group))! as Group;
  const posts = await getPosts({
    group: group.category,
    category: searchParams.category,
  });
  const hashTags = getHashTags({
    group: group.category,
  });
  return <PostListSection posts={posts} hashTags={hashTags} category={category} group={_group}/>;
}
