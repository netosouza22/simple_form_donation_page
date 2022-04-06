// @flow
import * as React from 'react';
import { Person } from '../../types/forms';
import FormikTextField from '../FormInputs/FormikTextField';
import FormikTextFieldMasked from '../FormInputs/FormikTextFieldMasked';
import { ContainerForm, MainContainerForm } from './styles';

const ContactForm: React.FC = () => {
  const [person, setPerson] = React.useState<Person>({} as Person);

  const handleChange = React.useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setPerson({ ...person, [e.currentTarget.name]: e.currentTarget.value });
    },
    [person],
  );

  return (
    <MainContainerForm>
      <h1>Registre-se e participe de nossa comunidade</h1>
      <ContainerForm>
        <form>
          <FormikTextField name="nome" placeholder="Insira Seu Nome" onChange={handleChange} />
          <FormikTextFieldMasked name="CPF" placeholder="Insira Seu CPF" onChange={handleChange} mask="cpf" />
          <FormikTextFieldMasked name="CNPJ" placeholder="Insira Seu CNPJ" onChange={handleChange} mask="cnpj" />
          <FormikTextFieldMasked
            name="currency"
            placeholder="Insira o Valor que deseja Doar"
            onChange={handleChange}
            mask="currency"
          />
          <FormikTextFieldMasked name="phone" placeholder="Insira Seu CPF" onChange={handleChange} mask="phoneNumber" />
        </form>
      </ContainerForm>
    </MainContainerForm>
  );
};

export default ContactForm;
