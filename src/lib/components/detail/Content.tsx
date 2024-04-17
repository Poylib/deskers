'use client';
import 'github-markdown-css';
import { Post } from '@/data/model/type';
import styled from 'styled-components';

const StyledRootDiv = styled.div`
  min-width: 320px;
  padding: 0 24px;

  letter-spacing: -0.004em;
  word-break: keep-all;
  overflow-wrap: break-word;

  h2 {
    margin: 2.5rem 0 1rem;
    line-height: 1.5;
    font-size: 2rem;
  }

  h3 {
    margin: 2rem 0 1rem;
    line-height: 1.4;
    font-size: 1.5rem;
  }

  h4 {
    margin: 1.5rem 0 0.5rem;
    line-height: 1.3;
    font-size: 1.25rem;
  }

  h5 {
    margin: 1rem 0 0.25rem;
    line-height: 1.2;
    font-size: 1.125rem;
  }

  p {
    line-height: 1.7;
    font-size: 1.125rem;
  }

  ul,
  ol {
    line-height: 1.7;
    font-size: 1.125rem;
  }
`;

export default function Content({ post }: { post: Post }) {
  return (
    <StyledRootDiv>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </StyledRootDiv>
  );
}
