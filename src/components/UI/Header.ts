import styled from 'styled-components';

export const TextField = styled.input`
  width: 80%;
  height: 50px;
  padding: 0px 10px;

  font-size: 1.2rem;
  background-color: transparent;

  &::placeholder {
    color: black;
  }

  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`;
