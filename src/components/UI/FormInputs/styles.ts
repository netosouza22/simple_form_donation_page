import styled, { css } from 'styled-components';
import { InputPropsRadio } from './RadioInput/index';
import { InputProps } from './TextFieldMasked/index';

export const TextField = styled.input<InputProps>`
  z-index: 1;
  width: 100%;
  height: 50px;

  padding: 0px 10px;
  ${({ helperText }) =>
    helperText &&
    helperText?.length > 0 &&
    css`
      padding: 0px 10px 0px 60px;
    `}

  font-size: 2rem;
  background-color: transparent;

  &::placeholder {
    color: black;
  }

  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`;

export const TextFieldContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
export const HelperTextField = styled.div<InputProps>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme, darkColor = true, backgroundColor = 'primary' }) =>
    css`
      background-color: ${backgroundColor === 'primary'
        ? theme.colors.primary.ultraLight
        : theme.colors.secondary.ultraLight};

      color: ${darkColor ? theme.colors.common.black : theme.colors.common.white};
    `}

  width: 100%;
  max-width: 50px;
  height: 100%;
  min-height: 50px;
  max-height: 50px;

  border-radius: 5px 0px 0px 5px;

  text-align: center;
  vertical-align: auto;

  font-size: 2.2rem;
  font-weight: bold;
  line-height: 25px;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  z-index: 999;
`;

export const RadioButtonLabel = styled.div<InputPropsRadio>`
  font-size: 1.2rem;
  padding: 0;
  margin: 0 10px;
  cursor: pointer;
`;
export const RadioButtonInput = styled.div<InputPropsRadio>`
  cursor: pointer;
  width: 15px;
  height: 15px;
  & input {
    opacity: 0;
  }
`;
export const RadioButtonContainer = styled.div<InputPropsRadio>`
  width: 100%;
  max-width: 13rem;
  width: 100%;
  cursor: pointer;

  display: flex;
  align-items: center;
  flex-direction: row-reverse;

  ${RadioButtonInput}:hover & {
    background-color: blue;
  }
`;

export const RadioCheckmark = styled.div<InputPropsRadio>`
  width: 15px;
  height: 15px;
  position: absolute;

  border: 5px solid #000;
  border-radius: 50%;

  cursor: pointer;
`;
