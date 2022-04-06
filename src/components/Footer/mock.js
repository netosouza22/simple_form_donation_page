import IconContact from '../../assets/icons/icon-contact.svg';
import IconFacebook from '../../assets/icons/icon-facebook.svg';
import IconInstagram from '../../assets/icons/icon-instagram.svg';
import IconWhatsapp from '../../assets/icons/icon-zap.svg';

export const footerInfo = {
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
};
