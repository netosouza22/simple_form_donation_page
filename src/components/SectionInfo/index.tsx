// @flow
import * as React from 'react';
import Icon2 from '../../assets/icons/amor.png';
import Icon1 from '../../assets/icons/conhecimento.png';
import Icon3 from '../../assets/icons/maternidade.png';
import Icon4 from '../../assets/icons/refeicoes.png';
import { Footer } from '../Footer';
import EmphasisText from '../UI/EmphasisText';
import { GridImage } from '../UI/GridImage';
import Heading from '../UI/Heading';
import { ItemListIcon } from '../UI/ItemListIcon';
import TextComponent from '../UI/TextComponent';
import * as Styled from './styles';

export interface props {
  size?: any;
  GridImageArray?: any;
  footerInfo?: any;
}

const SectionInfo = ({ size, GridImageArray, footerInfo }: props) => {
  console.log(GridImageArray);
  return (
    <Styled.Container>
      <Styled.SectionInfoHead>
        <EmphasisText size="small" fontSize="sm" fontWeight="bd" colorDark={false}>
          Doação para:
        </EmphasisText>
        <Styled.SectionTitle>
          <Heading uppercase={false} as="h2" size="lg" colorDark={false}>
            Filhos do Amanhã
          </Heading>
          <TextComponent background={true} colorDark={false} fontSize="md">
            ONG voltada a dar a crianças pobres da cidade de Sobral
          </TextComponent>
        </Styled.SectionTitle>
      </Styled.SectionInfoHead>
      <Styled.SectionInfoBody>
        <EmphasisText size="small" fontSize="sm" fontWeight="bd" colorDark={false}>
          O que fazemos:
        </EmphasisText>
        <Styled.ListIconContainer>
          <ItemListIcon srcImg={Icon1} text="conhecimento" bold={true}>
            Fornecimento de Refeições
          </ItemListIcon>
          <ItemListIcon srcImg={Icon2} text="conhecimento" bold={true}>
            Fornecimento de Refeições
          </ItemListIcon>
          <ItemListIcon srcImg={Icon3} text="conhecimento" bold={true}>
            Fornecimento de Refeições
          </ItemListIcon>
          <ItemListIcon srcImg={Icon4} text="conhecimento" bold={true}>
            Fornecimento de Refeições
          </ItemListIcon>
        </Styled.ListIconContainer>
        <EmphasisText size="small" fontSize="sm" fontWeight="bd" colorDark={false}>
          Nossa Galeria:
        </EmphasisText>
        <GridImage ImgArray={GridImageArray} />
      </Styled.SectionInfoBody>
      <Styled.SectionFooter>
        <Footer
          phone={footerInfo.phone}
          email={footerInfo.email}
          iconsContact={footerInfo.iconsContact}
          iconsMedia={footerInfo.iconsMedia}
        />
      </Styled.SectionFooter>
    </Styled.Container>
  );
};

export default SectionInfo;
