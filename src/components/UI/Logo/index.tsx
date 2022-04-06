import * as React from 'react';
import styled from 'styled-components';
import logoName from '../../../assets/icons/logo-name.svg';
import logo from '../../../assets/icons/logo.png';

const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Header: React.FC = () => {
  return (
    <ContainerLogo>
      <img src={logo} width={'25px'} style={{ marginRight: '5px' }} />
      <img src={logoName} />
    </ContainerLogo>
  );
};

export default Header;
