import styled, { css } from 'styled-components';
import { InputPropsRadio } from './index';

export const RadioButtonLabel = styled.label<InputPropsRadio>`
  font-size: 1.2rem;
  padding: 0;
  margin: 0 10px;
  font-weight: bold;
  cursor: pointer;
`;

export const RadioCheckmark = styled.div<InputPropsRadio>`
  ${({ theme, checked }) => css`
    border: ${checked ? 'none' : `2px solid  ${theme.colors.common.black}`};
    background-color: ${checked ? `${theme.colors.primary.main}` : `${theme.colors.common.white}`};
    color: ${checked ? `${theme.colors.common.white}` : `#414746`};
  `}
  width: 76px;
  height: 54px;
  border-radius: 5px;
  font-size: 2.1rem;

  text-align: center;
  position: absolute;

  cursor: pointer;
`;

export const RadioButtonInput = styled.div<InputPropsRadio>`
  cursor: pointer;
  width: 76px;
  height: 54px;
  & input {
    width: 76px;
    height: 54px;
    cursor: pointer;
    opacity: 0;
  }
`;

export const RadioButtonContainer = styled.div<InputPropsRadio>`
  width: 100%;
  max-width: 75px;
  width: 100%;
  cursor: pointer;

  display: flex;
  align-items: center;
  flex-direction: row-reverse;

  &:hover ${RadioCheckmark} {
    ${({ theme, checked }) =>
      css`
        background-color: ${!checked ? `${theme.colors.primary.main}` : `${theme.colors.primary.ultraLight}`} };
      `}
  }
`;
