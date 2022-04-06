import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-size: 62.5%;
  font-family: 'Roboto', sans-serif;
}
body: {
  display: flex;
  margin: auto;
  font-family: 'Roboto', sans-serif;
}
`;
