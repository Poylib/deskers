'use client';
import { ImageList } from '@mui/material';
import Content from '../hash-list/Content';

import { Post } from '@/data/model/type';
import styled from 'styled-components';

type Props = {
  posts: Post[];
};

const StyledRootDiv = styled.div`
  .container {
    min-width: 200px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default function ContentList({ posts }: Props) {
  return (
    <StyledRootDiv>
      <section className="container">
        <ImageList sx={{ height: '100%', gridTemplateColumns: `repeat(auto-fill, minmax(200px, 1fr)) !important` }} gap={12}>
          {posts.map((item, idx) => (
            <Content key={`${idx}`} item={item} />
          ))}
        </ImageList>
      </section>
    </StyledRootDiv>
  );
}
