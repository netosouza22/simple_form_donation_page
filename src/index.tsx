import React from 'react';
import ReactDOM from 'react-dom';
import Container from './pages/Container';
import { GlobalStyles } from './styles/GlobalStyles';
import Theme from './styles/Theme';

ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <>
        <GlobalStyles />
        <Container />
      </>
    </Theme>
  </React.StrictMode>,
  document.getElementById('root'),
);
