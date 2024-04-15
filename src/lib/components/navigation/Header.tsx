'use client';
import { useState } from 'react';
import NavBar from './navBar/NavBar';
import { Group } from '@/data/model/type';

type Props = {
  groups: Group[]
}

export const Header: React.FC<Props> = ({ groups }: Props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return <NavBar 
    groups={groups}
    active={isNavOpen} 
    toggleNav={toggleNav} 
  />;
};

export default NavBar;
