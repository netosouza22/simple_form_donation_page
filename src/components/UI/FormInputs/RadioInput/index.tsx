import React, { InputHTMLAttributes } from 'react';
import * as Styled from '../styles';

export interface InputPropsRadio extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
  labelPos?: 'up' | 'left' | 'down' | 'right';
  checked?: boolean;
}
export const RadioButton: React.FC<InputPropsRadio> = ({ checked, label = 'presidente', ...rest }) => {
  return (
    <Styled.RadioButtonContainer>
      <Styled.RadioButtonLabel>{label}</Styled.RadioButtonLabel>
      <Styled.RadioButtonInput>
        <Styled.RadioCheckmark checked={checked}></Styled.RadioCheckmark>
        <input type="radio" {...rest} />
      </Styled.RadioButtonInput>
    </Styled.RadioButtonContainer>
  );
};
