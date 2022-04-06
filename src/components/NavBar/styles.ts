import styled, { css } from 'styled-components';

export const ContainerNavBar = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary.ultraLight};
    width: 100%;
    padding: 10px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;
