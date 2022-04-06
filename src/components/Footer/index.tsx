import { Icon } from '../UI/Icon/index';
import { TextComponent } from '../UI/TextComponent';
import * as Styled from './styles';
export interface IconInterface {
  srcImg: string;
  altText: string;
  link: string | null;
}

export interface FooterInterface {
  phone: string;
  email: string;
  iconsContact: Array<IconInterface>;
  iconsMedia: Array<IconInterface>;
}
export const Footer = ({ phone, email, iconsContact, iconsMedia }: FooterInterface) => {
  console.log(iconsContact);
  return (
    <Styled.Container>
      <Styled.SectionContactUs>
        <Icon srcImg={iconsContact[0].srcImg} text={iconsContact[0].altText} />
        <Styled.SectionContactUsText>
          <TextComponent colorDark={true} fontSize="xs" bold={true}>
            {phone}
          </TextComponent>
          <TextComponent colorDark={true} fontSize="xs" bold={true}>
            {email}
          </TextComponent>
        </Styled.SectionContactUsText>
      </Styled.SectionContactUs>
      <Styled.SectionSocialMedia>
        {iconsMedia.map((item, index) => {
          return <Icon key={index} srcImg={item.srcImg} text={item.altText}></Icon>;
        })}
      </Styled.SectionSocialMedia>
    </Styled.Container>
  );
};
