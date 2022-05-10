import styled, { css, DefaultTheme } from 'styled-components';

export interface IButton {
  children?: string;
  variant?: 'primary' | 'secondary';
  size: 'small' | 'medium' | 'large';
}

const ButtonSize: any = {
  small: (theme: DefaultTheme) => css`
    /* width: 60px;
    height: 30px; */
    padding: 6px;
    min-width: 60px;
    max-width: 100px;
    font-size: ${theme.font.fontSizes.sm};
  `,
  medium: (theme: DefaultTheme) => css`
    padding: 9px;
    min-width: 100px;
    max-width: 140px;
    font-size: ${theme.font.fontSizes.md};
  `,
  large: (theme: DefaultTheme) => css`
    padding: 11px;
    min-width: 140px;
    font-size: ${theme.font.fontSizes.lg};
  `,
};

const ContainerButton = styled.button<IButton>`
  ${({ theme, variant, size }) => css`
    background-color: ${variant === 'primary' ? theme.colors.primary.main : theme.colors.secondary.main};
    color: ${theme.colors.common.white};

    border-radius: 5px;
    border: none;
    font-weight: 700;
    cursor: pointer;
    transition: ease-in-out 0.3s;

    ${ButtonSize[size](theme)};

    &:hover {
      transform: scale(1.07);
    }
  `}
`;

export const Button = ({ children, ...props }: IButton) => {
  // eslint-disable-next-line prettier/prettier
  return (<ContainerButton {...props}>{children}</ContainerButton>);
};
