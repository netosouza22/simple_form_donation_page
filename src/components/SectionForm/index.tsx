// @flow
import * as React from 'react';
import { Person } from '../../types/forms';
import { Box } from '../UI/Box';
import { Button } from '../UI/Button';
import EmphasisText from '../UI/EmphasisText';
import { RadioButtonMoney } from '../UI/FormInputs/RadioButtonMoney';
import { RadioButton } from '../UI/FormInputs/RadioInput';
import { TextField } from '../UI/FormInputs/TextField';
import { TextFieldMasked } from '../UI/FormInputs/TextFieldMasked';
import * as Styled from './styles';

const SectionForm: React.FC = () => {
  const [person, setPerson] = React.useState<Person>({} as Person);
  const [valueMoney, setValueMoney] = React.useState<string>('');
  const [typeChecked, setTypeChecked] = React.useState({
    radioOne: true,
    radioTwo: false,
  });
  const [radioMoneyChecked, setRadioMoneyChecked] = React.useState({
    radioOne: false,
    radioTwo: false,
    radioThree: false,
    radioFour: false,
  });

  const handleChange = React.useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setPerson({ ...person, [e.currentTarget.name]: e.currentTarget.value });

      if (e.currentTarget.name === 'currency') {
        setValueMoney(e.currentTarget.value);
      }

      if (e.currentTarget.name === 'personType') {
        if (e.currentTarget.value === 'fisicalPerson') {
          setTypeChecked({ radioOne: true, radioTwo: false });
        }
        if (e.currentTarget.value === 'legalPerson') {
          setTypeChecked({ radioOne: false, radioTwo: true });
        }
      }
    },
    [person],
  );
  const handleChangeMoney = React.useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setPerson({ ...person, [e.currentTarget.name]: e.currentTarget.value });

      if (e.currentTarget.name === 'radioMoney') {
        if (e.currentTarget.value === '10') {
          setRadioMoneyChecked({ radioOne: true, radioTwo: false, radioThree: false, radioFour: false });
          setValueMoney(`${e.currentTarget.value},00`);
        }
        if (e.currentTarget.value === '25') {
          setRadioMoneyChecked({ radioOne: false, radioTwo: true, radioThree: false, radioFour: false });
          setValueMoney(`${e.currentTarget.value},00`);
        }
        if (e.currentTarget.value === '50') {
          setRadioMoneyChecked({ radioOne: false, radioTwo: false, radioThree: true, radioFour: false });
          setValueMoney(`${e.currentTarget.value},00`);
        }
        if (e.currentTarget.value === '100') {
          setRadioMoneyChecked({ radioOne: false, radioTwo: false, radioThree: false, radioFour: true });
          setValueMoney(`${e.currentTarget.value},00`);
        }
      }
    },
    [person],
  );

  return (
    <Styled.Container>
      <Box mb="20px">
        <EmphasisText size="medium" fontSize="md" colorDark={true}>
          Insira seus dados para fazer a doação para esta Instituição
        </EmphasisText>
      </Box>
      <Styled.ContainerForm>
        <Styled.ContainerRadioForm>
          <RadioButton
            name="personType"
            label="Doar Como Pessoa Física"
            value="fisicalPerson"
            checked={typeChecked.radioOne}
            onClick={handleChange}
          ></RadioButton>
          <RadioButton
            name="personType"
            label="Doar Como Pessoa Jurídica"
            value="legalPerson"
            checked={typeChecked.radioTwo}
            onClick={handleChange}
          ></RadioButton>
        </Styled.ContainerRadioForm>

        <TextField name="nome" label="Nome" placeholder="Insira Seu Nome" onChange={handleChange} />
        {typeChecked.radioOne ? (
          <TextFieldMasked name="cpf" label="CPF" placeholder="Insira Seu CPF" mask="cpf" onChange={handleChange} />
        ) : (
          <TextFieldMasked name="cnpj" label="CNPJ" placeholder="Insira Seu CNPJ" mask="cnpj" onChange={handleChange} />
        )}

        <TextFieldMasked
          name="phone"
          label="Telefone"
          placeholder="Insira Seu Número"
          mask="phoneNumber"
          onChange={handleChange}
        />

        <Styled.RadioMoneySection>
          <Styled.RadioMoneyGroupLabel>Quantia:</Styled.RadioMoneyGroupLabel>
          <Styled.RadioMoneyGroup>
            <RadioButtonMoney
              label="10"
              value={10}
              name="radioMoney"
              checked={radioMoneyChecked.radioOne}
              onClick={handleChangeMoney}
            />
            <RadioButtonMoney
              label="25"
              value={25}
              name="radioMoney"
              checked={radioMoneyChecked.radioTwo}
              onClick={handleChangeMoney}
            />
            <RadioButtonMoney
              label="50"
              value={50}
              name="radioMoney"
              checked={radioMoneyChecked.radioThree}
              onClick={handleChangeMoney}
            />
            <RadioButtonMoney
              label="100"
              value={100}
              name="radioMoney"
              checked={radioMoneyChecked.radioFour}
              onClick={handleChangeMoney}
            />
          </Styled.RadioMoneyGroup>
        </Styled.RadioMoneySection>
        <Box py="10px">
          <TextFieldMasked
            name="currency"
            placeholder="Insira o Valor que deseja Doar"
            onChange={handleChange}
            value={valueMoney ? valueMoney : ''}
            mask="currency"
            helperText="R$"
          />
        </Box>
        <Box justifyContent="flex-end" mt="10px">
          <Button size="medium" variant="primary">
            Doar
          </Button>
        </Box>
      </Styled.ContainerForm>
    </Styled.Container>
  );
};

export default SectionForm;
