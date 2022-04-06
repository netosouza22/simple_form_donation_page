// @flow
import React, { InputHTMLAttributes } from 'react';
import { TextField } from '../../UI/TextField';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Index: React.FC<InputProps> = ({ ...props }) => {
  return <TextField {...props} />;
};

export default Index;
