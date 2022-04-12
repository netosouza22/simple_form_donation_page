import IconContact from '../../assets/icons/icon-contact.svg';
import IconFacebook from '../../assets/icons/icon-facebook.svg';
import IconInstagram from '../../assets/icons/icon-instagram.svg';
import IconWhatsapp from '../../assets/icons/icon-zap.svg';
import backgroundImg from '../../assets/imgs/background-img.png';
import image1 from '../../assets/imgs/criança1.jpg';
import image2 from '../../assets/imgs/criança2.jpg';
import image3 from '../../assets/imgs/criança3.jpg';

export const SectionInfoRes = {
  backgroundImg: {
    altText: 'Imagem 1',
    srcImg: backgroundImg,
  },
  gridImageArray: [
    {
      altText: 'Imagem 1',
      srcImg: image1,
    },
    {
      altText: 'Imagem 1',
      srcImg: image2,
    },
    {
      altText: 'Imagem 1',
      srcImg: image3,
    },
  ],
  footerInfo: {
    phone: '(88) 99945-5063',
    email: 'emaiqualquer@gmail.com',

    iconsContact: [
      {
        srcImg: IconContact,
        altText: 'Entre em Contato',
        link: null,
      },
    ],
    iconsMedia: [
      {
        srcImg: IconWhatsapp,
        altText: 'Whatsapp',
        link: '88999999999',
      },
      {
        srcImg: IconFacebook,
        altText: 'Facebook',
        link: 'https://facebook.com',
      },
      {
        srcImg: IconInstagram,
        altText: 'Instagram',
        link: 'https://instagram.com',
      },
    ],
  },
};
