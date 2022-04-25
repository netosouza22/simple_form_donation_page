// @flow
import React, { InputHTMLAttributes } from 'react';
import { maskCNPJ, maskCPF, maskCurrency, maskPhoneNumber } from '../../../../utils/masks';
import { HelperTextField, TextField, TextFieldContainer } from '../styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  helperText?: string;
  mask?: 'cpf' | 'cnpj' | 'currency' | 'phoneNumber';
  backgroundColor?: string;
  darkColor?: boolean;
}

export const TextFieldMasked: React.FC<InputProps> = ({ mask, helperText, backgroundColor, darkColor, ...rest }) => {
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

  const helperTextFormated = () => {
    const textFormated = helperText?.slice(0, 3);

    return textFormated;
  };

  return (
    <TextFieldContainer>
      {helperText && (
        <HelperTextField backgroundColor={backgroundColor} darkColor={darkColor}>
          {' '}
          {helperTextFormated()}{' '}
        </HelperTextField>
      )}
      <TextField helperText={helperText} {...rest} onChange={handleChange} />;
    </TextFieldContainer>
  );
};
