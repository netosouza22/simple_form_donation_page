// @flow
import React, { InputHTMLAttributes } from 'react';
import { TextFieldContainer } from '../styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export const TextField: React.FC<InputProps> = ({ ...props }) => {
  return <TextFieldContainer {...props} />;
};
