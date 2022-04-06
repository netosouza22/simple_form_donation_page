import styled from 'styled-components';
import { TypographyContainer } from '../TextComponent';

export const Container = styled.span`
  width: 14rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & > ${TypographyContainer} {
    margin-left: 0.8rem;
  }
`;
