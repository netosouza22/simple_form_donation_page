// @flow
import React, { InputHTMLAttributes } from 'react';
import { LabelInput, TextFieldContainer, TextFieldInput } from '../styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

export const TextField: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <TextFieldContainer>
      <LabelInput>{label}:</LabelInput>
      <TextFieldInput {...props} />)
    </TextFieldContainer>
  );
};
