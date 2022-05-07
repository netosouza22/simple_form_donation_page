import React, { InputHTMLAttributes, useState } from 'react';
import * as Styled from './styles';

export interface InputPropsRadio extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
  checked?: boolean;
}
export const RadioButtonMoney: React.FC<InputPropsRadio> = ({ ...rest }) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = React.useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      console.log(event.currentTarget.value);
      setChecked((s) => !s);
      console.log(checked);
    },
    [checked],
  );
  return (
    <Styled.RadioButtonContainer>
      <Styled.RadioButtonInput>
        <Styled.RadioCheckmark checked={checked}> R$ 54,00</Styled.RadioCheckmark>
        <input type="radio" {...rest} onClick={(e) => handleChange(e)} />
      </Styled.RadioButtonInput>
    </Styled.RadioButtonContainer>
  );
};
