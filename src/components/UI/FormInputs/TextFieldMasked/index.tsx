// @flow
import React, { InputHTMLAttributes } from 'react';
import { maskCNPJ, maskCPF, maskCurrency, maskPhoneNumber } from '../../../../utils/masks';
import { HelperTextField, LabelInput, TextField, TextFieldContainer } from '../styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  helperText?: string;
  mask?: 'cpf' | 'cnpj' | 'currency' | 'phoneNumber';
  label?: string;
  backgroundColor?: string;
  darkColor?: boolean;
  theValue?: string;
}

export const TextFieldMasked: React.FC<InputProps> = ({
  mask,
  label,
  helperText,
  backgroundColor,
  darkColor,
  value,
  ...rest
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (inputRef.current !== null && typeof value === 'string') {
      inputRef.current.value = value;
    }
  }, [value]);

  const handleChangeText = React.useCallback(
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
      {label && <LabelInput>{label}:</LabelInput>}
      {helperText && (
        <HelperTextField backgroundColor={backgroundColor} darkColor={darkColor}>
          {helperTextFormated()}
        </HelperTextField>
      )}
      <TextField helperText={helperText} {...rest} ref={inputRef} onChange={handleChangeText} />;
    </TextFieldContainer>
  );
};
