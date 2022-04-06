import styled, { css } from 'styled-components';
import { Button } from '../Button';
import Link from '../Link';

const ContainerNavLink = styled.div`
  ${({ theme }) => css``}
`;

const NavLink = () => {
  return (
    <ContainerNavLink>
      <Link bold={true}>Inicio</Link>
      <Link bold={true}>{`ONG's`}</Link>
      <Link bold={true}>Minhas Doações</Link>
      <Link bold={true}>Minha Conta</Link>
      <Button size="small" variant="secondary">
        Sair
      </Button>
    </ContainerNavLink>
  );
};

export default NavLink;
