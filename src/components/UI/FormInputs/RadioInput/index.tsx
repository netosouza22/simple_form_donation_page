import React, { InputHTMLAttributes } from 'react';
import * as Styled from '../styles';

export interface InputPropsRadio extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
  labelPos?: 'up' | 'left' | 'down' | 'right';
}
export const RadioButton: React.FC<InputPropsRadio> = ({ label = 'presidente' }) => {
  return (
    <Styled.RadioButtonContainer>
      <Styled.RadioButtonLabel>{label}</Styled.RadioButtonLabel>
      <Styled.RadioButtonInput>
        <Styled.RadioCheckmark></Styled.RadioCheckmark>
        <input type="radio"></input>
      </Styled.RadioButtonInput>
    </Styled.RadioButtonContainer>
  );
};
