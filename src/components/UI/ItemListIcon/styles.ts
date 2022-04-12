import styled from 'styled-components';
import { TypographyContainer } from '../TextComponent';

export const Container = styled.span`
  width: 18rem;

  display: flex;
  align-items: center;

  & > ${TypographyContainer} {
    margin-left: 0.8rem;
  }
`;
