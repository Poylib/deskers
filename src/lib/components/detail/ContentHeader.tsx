'use client';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import { Post } from '@/data/model/type';
import styled from 'styled-components';

export default function ContentHeader({ post }: { post: Post }) {
  return (
    <StyledRootDiv>
      <span className="categoryName">{post.category}</span>
      <h1>{post.title}</h1>
      <div className="date">
        <CalendarTodayIcon sx={{ fontSize: 20 }} />
        <span>{post.dateString}</span>
      </div>
      <span>읽는 시간 {post.readingMinutes} 분</span>
    </StyledRootDiv>
  );
}

const StyledRootDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  padding: 24px;

  .categoryName {
    margin-bottom: 24px;
  }

  h1 {
    font-size: 2rem;
    line-height: 1.5;
  }

  .date {
    display: flex;
    align-items: center;
    margin: 24px 0;

    span {
      margin-left: 8px;
    }
  }
`;
