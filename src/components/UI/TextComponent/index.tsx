import styled, { css } from 'styled-components';
import { IFontSize } from '../../../styles/styles';

export interface IProps {
  children: string;
  colorDark?: boolean;
  fontSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  background?: boolean;
  bold?: boolean;
}

export const TypographyContainer = styled.div<IProps>`
  ${({ theme, colorDark, fontSize, bold }) => css`
    font-size: ${theme.font.fontSizes[fontSize as keyof IFontSize]};
    color: ${colorDark ? theme.colors.common.black : theme.colors.common.white};
    font-weight: ${bold ? theme.font.weights.bd : theme.font.weights.rg};
  `}
`;

export const TextComponent = ({ children, ...props }: IProps) => {
  return <TypographyContainer {...props}>{children}</TypographyContainer>;
};

export default TextComponent;
