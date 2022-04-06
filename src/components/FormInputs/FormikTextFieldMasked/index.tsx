// @flow
import React, { InputHTMLAttributes } from 'react';
import { maskCNPJ, maskCPF, maskCurrency, maskPhoneNumber } from '../../../utils/masks';
import { TextField } from '../../UI/TextField';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask: string;
}

const Index: React.FC<InputProps> = ({ mask, ...rest }) => {
  const handleChange = React.useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      let value = '';
      switch (mask) {
        case 'cpf':
          e.currentTarget.maxLength = 14;
          value = maskCPF(e.currentTarget.value);
          break;
        case 'cnpj':
          e.currentTarget.maxLength = 18;
          value = maskCNPJ(e.currentTarget.value);
          break;
        case 'currency':
          e.currentTarget.maxLength = 12;
          value = maskCurrency(e.currentTarget.value);
          break;
        case 'phoneNumber':
          e.currentTarget.maxLength = 15;
          value = maskPhoneNumber(e.currentTarget.value);
          break;
        default:
          e.currentTarget.maxLength = 14;
          value = maskCurrency(e.currentTarget.value);
      }

      e.currentTarget.value = value;
    },
    [mask],
  );

  return <TextField {...rest} onChange={handleChange} />;
};

export default Index;
