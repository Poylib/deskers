import React from 'react';
import styled from 'styled-components';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Group } from '@/data/model/type';
import Link from 'next/link';

interface HeaderProps {
  groups: Group[];
  toggleNav: () => void;
  active: boolean;
}

const StyledRootDiv = styled.div`
  :root {
    --main-color: #5d9ab2;
    --accent-color: #bf6a7a;
    --dark-main-color: #2b5566;
    --text-bright-color: #fff;
    --icon-color: #fff;
    --icon-bk-color: #ddd;
    --large-width: 1000px;
  }

  body {
    margin: 0;
    font-family: '맑은 고딕', 'Apple SD Gothic Neo', sans-serif;
  }

  header {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.9);
  }

  .headA {
    display: inline-block;
    line-height: 70px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: #5d9ab2;
    background-color: var(--main-color);
    color: #fff;
    color: var(--text-bright-color);
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    text-decoration: none;
  }

  @media (min-width: 768px) {
    & {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1000px;
      max-width: var(--large-width);
      margin-left: auto;
      margin-right: auto;
    }

    .headB ul {
      display: flex;
    }
  }

  @media (max-width: 767px) {
    .container-small {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .headC {
      margin-right: 10px;
      padding: 0;
      border: none;
      outline: none;
      background: none;
      font-size: 28px;
      opacity: 0.5;
      cursor: pointer;
    }

    .headC:hover {
      opacity: 0.3;
    }
  }

  @media (min-width: 768px) {
    .headC {
      display: none;
    }
  }
`;

const StyledNavWrapper = styled.div`
  .headB ul {
    margin: 0;
    padding: 10px;
    list-style: none;
  }

  .headB a {
    display: block;
    padding: 15px;
    color: inherit;
    font-size: 12px;
    text-decoration: none;
  }

  .headB a:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 767px) {
    .headB {
      display: none;
    }
  }

  @media (min-width: 768px) {
    .headB {
      display: block !important;
    }
  }
  ${({ active }: any) =>
    active &&
    `
    .headB {
      display: block !important;
    }
  `}
` as any;

const NavBar: React.FC<HeaderProps> = ({ groups, active, toggleNav }) => {
  return (
    <>
      <StyledRootDiv>
        <div className="container-small">
          <a href="/" className="headA">
            Deskers
          </a>
          <button type="button" className="headC" onClick={toggleNav}>
            <FontAwesomeIcon icon={faBars} title="MENU" titleId='menu-title-id'/>
          </button>
        </div>
        <StyledNavWrapper active={active ? 'active' : undefined}>
          <nav className="headB">
            <ul>
              <li>
                <Link href={`/about`}>
                  <span>ABOUT</span>
                </Link>
              </li>

              {groups?.map((group, idx) => {
                return (
                  <li key={idx}>
                    <a href={`/${group.category}`}>{group.displayName}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </StyledNavWrapper>
      </StyledRootDiv>
    </>
  );
};

export default NavBar;
