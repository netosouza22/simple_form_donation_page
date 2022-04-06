// @flow
import styled, { css, DefaultTheme } from 'styled-components';

type IpropsContainer = {
  uppercase: boolean;
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  size: 'sm' | 'md' | 'lg' | 'xl';
  colorDark: boolean;
};

interface Iprops extends IpropsContainer {
  children: string;
}

const titleSize: any = {
  sm: (theme: DefaultTheme) => css`
    font-size: ${theme.font.fontSizes.sm};
  `,
  md: (theme: DefaultTheme) => css`
    font-size: ${theme.font.fontSizes.md};
  `,
  lg: (theme: DefaultTheme) => css`
    font-size: ${theme.font.fontSizes.lg};
  `,
  xl: (theme: DefaultTheme) => css`
    font-size: ${theme.font.fontSizes.xl};
  `,
};

const titleCase = (uppercase: boolean) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

const ContainerHeading = styled.h1<IpropsContainer>`
  ${({ theme, colorDark, size, uppercase }) => css`
    color: ${colorDark ? theme.colors.common.black : theme.colors.common.white};
    ${titleCase(uppercase)};
    ${titleSize[size](theme)};
  `}
`;

const Heading = ({ children, ...rest }: Iprops) => {
  return <ContainerHeading {...rest}> {children}</ContainerHeading>;
};

export default Heading;
