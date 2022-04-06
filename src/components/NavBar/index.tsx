import * as React from 'react';
import Logo from '../UI/Logo';
import NavLink from '../UI/NavLink';
import { ContainerNavBar } from './styles';

const Header: React.FC = () => {
  return (
    <ContainerNavBar>
      <Logo />
      <NavLink />
    </ContainerNavBar>
  );
};

export default Header;
