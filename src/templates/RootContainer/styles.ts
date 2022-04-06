import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: red;
    background-color: ${theme.colors.common.mainBg};
    display: flex;
    flex-direction: column;
  `}
`;
