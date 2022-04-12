import styled, { css } from 'styled-components';
import { IFontSize, IFontWeight } from '../../../styles/styles';

export interface IProps {
  children?: string;
  size: 'small' | 'medium' | 'large';
  fontSize?: string;
  fontWeight?: string;
  colorDark: boolean;
}

const EnphasisTextSize: any = {
  small: () => css`
    padding-left: 14px;
    &::before {
      width: 4px;
    }
  `,
  medium: () => css`
    padding-left: 15px;
    &::before {
      width: 8px;
    }
  `,
};

const ContainerEmphasisText = styled.div<IProps>`
  ${({ theme, size, fontSize, fontWeight, colorDark }) => css`
    font-size: ${theme.font.fontSizes[fontSize as keyof IFontSize]};
    color: ${colorDark ? theme.colors.common.black : theme.colors.common.white};
    position: relative;
    font-weight: ${theme.font.weights[fontWeight as keyof IFontWeight]};

    &::before {
      content: '';
      position: absolute;
      height: 75%;
      left: 0;
      bottom: 3px;
      background-color: ${theme.colors.secondary.main};
      border-radius: 10px;
    }

    ${EnphasisTextSize[size]}
  `}
`;

const EmphasisText = ({ children, ...props }: IProps) => {
  return <ContainerEmphasisText {...props}>{children}</ContainerEmphasisText>;
};

export default EmphasisText;
