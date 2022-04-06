// @flow
import * as React from 'react';
import NavBar from '../../components/NavBar';
import { Container } from './styles';

interface Iprops {
  children: JSX.Element;
}

const RootContainer = ({ children }: Iprops) => {
  return (
    <Container>
      <NavBar />
      {children}
    </Container>
  );
};

export default RootContainer;
