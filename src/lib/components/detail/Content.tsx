'use client';
import 'github-markdown-css';
import { Post } from '@/data/model/type';
import styled from 'styled-components';

const StyledRootDiv = styled.div`
  width: 1000px;
  min-width: 400px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    width: 600px;
    min-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: 767px) {
    width: 80%;
    min-width: 200px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default function Content({ post }: { post: Post }) {
  return (
    <StyledRootDiv>
      <div className={'markdown-body'} style={{ paddingTop: 40, paddingBottom: 40 }}>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </StyledRootDiv>
  );
}
