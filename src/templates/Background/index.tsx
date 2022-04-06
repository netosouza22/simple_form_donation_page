import styled, { css } from 'styled-components';
import { IPaletteCommon } from '../../styles/styles';
interface IProps {
  children: JSX.Element;
  color: string;
}

const BackgroundContainer = styled.div`
  ${({ theme, color }) => css`
    background-color: ${theme.colors.common[color as keyof IPaletteCommon]};
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 10em;
    background-color: blue;
  `}
`;

const Background = ({ children, color }: IProps) => {
  <BackgroundContainer color={color}>{children}</BackgroundContainer>;
};

export default Background;
