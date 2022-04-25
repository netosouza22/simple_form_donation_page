// @flow
import * as React from 'react';
import ContactForm from '../../components/SectionForm';
import SectionInfo from '../../components/SectionInfo';
import RootContainer from '../../templates/RootContainer';
import * as Styled from './styles';

const MainSection = () => {
  return (
    <RootContainer>
      <Styled.SectionDonation>
        <SectionInfo />
        <ContactForm />
      </Styled.SectionDonation>
    </RootContainer>
  );
};

export default MainSection;
