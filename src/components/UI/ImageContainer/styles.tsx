import styled, { css } from 'styled-components';

export const Container = styled.div<any>`
  ${({ width, height }) => css`
    width: ${width};
    height: ${height};
  `}
`;
