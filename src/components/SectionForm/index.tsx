// @flow
import * as React from 'react';
import { Person } from '../../types/forms';
import EmphasisText from '../UI/EmphasisText';
import { RadioButton } from '../UI/FormInputs/RadioInput';
import { TextField } from '../UI/FormInputs/TextField';
import { TextFieldMasked } from '../UI/FormInputs/TextFieldMasked';
import * as Styled from './styles';

const SectionForm: React.FC = () => {
  const [person, setPerson] = React.useState<Person>({} as Person);
  const [checked, setChecked] = React.useState({
    radioOne: true,
    radioTwo: false,
  });

  const handleChange = React.useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setPerson({ ...person, [e.currentTarget.name]: e.currentTarget.value });

      if (e.currentTarget.name === 'personType') {
        if (e.currentTarget.value === 'fisicalPerson') {
          setChecked({ radioOne: true, radioTwo: false });
        }
        if (e.currentTarget.value === 'legalPerson') {
          setChecked({ radioOne: false, radioTwo: true });
        }
      }
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
        <RadioButton
          name="personType"
          label="Doar Como Pessoa Física"
          value="fisicalPerson"
          checked={checked.radioOne}
          onClick={handleChange}
        ></RadioButton>
        <RadioButton
          name="personType"
          label="Doar Como Pessoa Jurídica"
          value="legalPerson"
          checked={checked.radioTwo}
          onClick={handleChange}
        ></RadioButton>
        <TextField name="nome" label="Nome" placeholder="Insira Seu Nome" onChange={handleChange} />
        <TextFieldMasked name="cpf" label="CPF" placeholder="Insira Seu CPF" mask="cpf" onChange={handleChange} />
        <TextFieldMasked name="cnpj" label="CNPJ" placeholder="Insira Seu CNPJ" mask="cnpj" onChange={handleChange} />
        <TextFieldMasked
          name="phone"
          label="Número"
          placeholder="Insira Seu Número"
          mask="phoneNumber"
          onChange={handleChange}
        />
        <TextFieldMasked
          name="currency"
          placeholder="Insira o Valor que deseja Doar"
          onChange={handleChange}
          mask="currency"
          helperText="R$"
        />
      </Styled.ContainerForm>
    </Styled.Container>
  );
};

export default SectionForm;
