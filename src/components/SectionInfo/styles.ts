import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 100%;
  ${({ theme }) => css`
    width: 50%;
    padding: 1.8rem;
    border-radius: 15px 30px 15px 15px;

    background-color: ${theme.colors.primary.main};

    @media (max-width: 800px) {
      width: 100%;
      padding: 1.8rem;
    }
  `}
`;

export const SectionTitle = styled.div`
  text-align: center;
`;
export const SectionInfoHead = styled.div`
  color: ${({ theme }) => theme.colors.common.white};
`;
export const SectionInfoBody = styled.div`
  color: ${({ theme }) => theme.colors.common.white};
`;
export const SectionFooter = styled.div`
  color: ${({ theme }) => theme.colors.common.white};
`;

export const ListIconContainer = styled.div`
  color: ${() => css`
    border: 1px solid;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  `};
`;
