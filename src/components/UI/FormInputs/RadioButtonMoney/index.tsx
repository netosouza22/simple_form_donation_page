import React, { InputHTMLAttributes } from 'react';
import * as Styled from './styles';

export interface InputPropsRadio extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
  value?: number;
  checked?: boolean;
}
export const RadioButtonMoney: React.FC<InputPropsRadio> = ({ label, checked, ...rest }) => {
  return (
    <Styled.RadioButtonContainer>
      <Styled.RadioButtonInput>
        <Styled.RadioCheckmark checked={checked}> R$ {label},00</Styled.RadioCheckmark>
        <input type="radio" {...rest} />
      </Styled.RadioButtonInput>
    </Styled.RadioButtonContainer>
  );
};
