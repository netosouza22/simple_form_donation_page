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
  const [moneyValue, setMoneyValue] = React.useState<string>('00,00');

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

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPerson({ ...person, [e.currentTarget.name]: e.currentTarget.value });

    if (e.currentTarget.name === 'personType') {
      if (e.currentTarget.value === 'fisicalPerson') {
        setTypeChecked({ radioOne: true, radioTwo: false });
      }
      if (e.currentTarget.value === 'legalPerson') {
        setTypeChecked({ radioOne: false, radioTwo: true });
      }
    }
  };

  const handleChooseMoneyValue = React.useCallback((e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.name === 'radioMoney') {
      if (e.currentTarget.value === '10') {
        setRadioMoneyChecked({ radioOne: true, radioTwo: false, radioThree: false, radioFour: false });
        setMoneyValue(`${e.currentTarget.value},00`);
      }
      if (e.currentTarget.value === '25') {
        setRadioMoneyChecked({ radioOne: false, radioTwo: true, radioThree: false, radioFour: false });
        setMoneyValue(`${e.currentTarget.value},00`);
      }
      if (e.currentTarget.value === '50') {
        setRadioMoneyChecked({ radioOne: false, radioTwo: false, radioThree: true, radioFour: false });
        setMoneyValue(`${e.currentTarget.value},00`);
      }
      if (e.currentTarget.value === '100') {
        setRadioMoneyChecked({ radioOne: false, radioTwo: false, radioThree: false, radioFour: true });
        setMoneyValue(`${e.currentTarget.value},00`);
      }
    }
  }, []);

  const handleChangeMoney = React.useCallback((e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    setMoneyValue(e.currentTarget.value);
  }, []);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <Styled.Container>
      <Box mb="20px">
        <EmphasisText size="medium" fontSize="md" colorDark={true}>
          Insira seus dados para fazer a doação para esta Instituição
        </EmphasisText>
      </Box>
      <Styled.ContainerForm onSubmit={onSubmit}>
        <Box>
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
        </Box>
        <Box>
          <TextField name="nome" label="Nome" placeholder="Insira Seu Nome" onChange={handleChange} />
        </Box>
        <Box>
          {typeChecked.radioOne ? (
            <TextFieldMasked name="cpf" label="CPF" placeholder="Insira Seu CPF" mask="cpf" onKeyUp={handleChange} />
          ) : (
            <TextFieldMasked
              name="cnpj"
              label="CNPJ"
              placeholder="Insira Seu CNPJ"
              mask="cnpj"
              onKeyUp={handleChange}
            />
          )}
        </Box>
        <Box>
          <TextFieldMasked
            name="phone"
            label="Telefone"
            placeholder="Insira Seu Número"
            mask="phoneNumber"
            onKeyUp={handleChange}
          />
        </Box>
        <Box>
          <Styled.RadioMoneySection>
            <Styled.RadioMoneyGroupLabel>Quantia:</Styled.RadioMoneyGroupLabel>
            <Styled.RadioMoneyGroup>
              <RadioButtonMoney
                label="10"
                value={10}
                name="radioMoney"
                checked={radioMoneyChecked.radioOne}
                onClick={handleChooseMoneyValue}
              />
              <RadioButtonMoney
                label="25"
                value={25}
                name="radioMoney"
                checked={radioMoneyChecked.radioTwo}
                onClick={handleChooseMoneyValue}
              />
              <RadioButtonMoney
                label="50"
                value={50}
                name="radioMoney"
                checked={radioMoneyChecked.radioThree}
                onClick={handleChooseMoneyValue}
              />
              <RadioButtonMoney
                label="100"
                value={100}
                name="radioMoney"
                checked={radioMoneyChecked.radioFour}
                onClick={handleChooseMoneyValue}
              />
            </Styled.RadioMoneyGroup>
          </Styled.RadioMoneySection>
        </Box>
        <Box py="10px">
          <TextFieldMasked
            name="currency"
            placeholder="Insira o Valor que deseja Doar"
            onKeyUp={handleChangeMoney}
            mask="currency"
            value={moneyValue}
            helperText="R$"
          />
        </Box>
        <Box justifyContent="flex-end" mt="10px">
          <Button type="submit" size="medium" variant="primary">
            Doar
          </Button>
        </Box>
      </Styled.ContainerForm>
    </Styled.Container>
  );
};

export default SectionForm;
