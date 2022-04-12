import styled, { css } from 'styled-components';

interface PropsBackgroundImg {
  backgroundImg: string;
}
export const Container = styled.div<PropsBackgroundImg>`
  height: 100%;
  ${({ theme, backgroundImg }) => css`
    width: 50%;
    background: url(${backgroundImg});
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
  padding: 10px 10px 20px;
`;
export const SectionInfoHead = styled.div`
  color: ${({ theme }) => theme.colors.common.white};
`;

export const SectionInfoBody = styled.div`
  color: ${({ theme }) => theme.colors.common.white};
`;
export const SectionFooter = styled.div`
  margin: auto;
  width: 89%;
`;

export const ListIconContainer = styled.div`
  ${() => css`
    padding: 10px 10px 20px;
    width: 90%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 15px;
  `};
`;

export const GridImgContainer = styled.div`
  ${() => css`
    margin: 10px 10px 20px 10px;
  `}
`;
