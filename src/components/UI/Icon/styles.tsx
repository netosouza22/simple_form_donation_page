import styled, { css } from 'styled-components';

export const Container = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.common.white};

    border-radius: 5px;
    border: none;
    font-weight: 700;
    cursor: pointer;
    transition: ease-in-out 0.3s

    &:hover {
      transform: scale(1.07);
    }
  `}
`;
