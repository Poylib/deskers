'use client';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <ContainerDiv>{children}</ContainerDiv>;
}

const ContainerDiv = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 900px;
`;
