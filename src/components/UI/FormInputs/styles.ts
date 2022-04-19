import styled, { css } from 'styled-components';
import { InputProps } from './FormikTextFieldMasked/index';

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
