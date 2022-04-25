// @flow
import * as React from 'react';
import { Person } from '../../types/forms';
import FormikTextField from '../FormInputs/FormikTextField';
import FormikTextFieldMasked from '../FormInputs/FormikTextFieldMasked';
import EmphasisText from '../UI/EmphasisText';
import { TextFieldMasked } from '../UI/FormInputs/TextFieldMasked';
import * as Styled from './styles';

const SectionForm: React.FC = () => {
  const [person, setPerson] = React.useState<Person>({} as Person);

  const handleChange = React.useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setPerson({ ...person, [e.currentTarget.name]: e.currentTarget.value });
    },
    [person],
  );

  console.log(person);
  return (
    <Styled.Container>
      <EmphasisText size="medium" fontSize="md" colorDark={true}>
        Insira seus dados para fazer a doação para esta Instituição
      </EmphasisText>
      <Styled.ContainerForm>
        ]
        {/* <Styled.CheckboxGroup>

        </Styled.CheckboxGroup> */}
        <FormikTextField name="nome" placeholder="Insira Seu Nome" onChange={handleChange} />
        <FormikTextFieldMasked name="CPF" placeholder="Insira Seu CPF" onChange={handleChange} mask="cpf" />
        <FormikTextFieldMasked name="CNPJ" placeholder="Insira Seu CNPJ" onChange={handleChange} mask="cnpj" />
        <TextFieldMasked
          name="currency"
          placeholder="Insira o Valor que deseja Doar"
          onChange={handleChange}
          mask="currency"
          helperText="R$"
        />
        <TextFieldMasked name="phone" placeholder="Insira Seu CPF" onChange={handleChange} mask="phoneNumber" />
      </Styled.ContainerForm>
    </Styled.Container>
  );
};

export default SectionForm;
