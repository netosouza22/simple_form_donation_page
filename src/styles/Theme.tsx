import { DefaultTheme, ThemeProvider } from 'styled-components';

interface Iprops {
  children: JSX.Element;
}

export const themeDefault: DefaultTheme = {
  colors: {
    common: {
      black: 'rgba(19, 30, 28, 1)',
      white: 'rgba(255, 255, 255, 1)',
      mainBg: 'rgba(253, 255, 255, 1)',
    },
    primary: {
      ultraLight: 'rgba(217, 236, 232, 1)',
      light: 'rgba(122, 236, 210, 1)',
      main: 'rgba(57, 218, 181, 1)',
      dark: 'rgba(12, 133, 105, 1)',
    },
    secondary: {
      ultraLight: 'rgba(246, 236, 227, 1)',
      light: 'rgba(248, 191, 140, 1)',
      main: 'rgba(244, 130, 27, 1)',
      dark: 'rgba(193, 104, 23, 1)',
    },
  },
  font: {
    weights: {
      rg: 400,
      md: 500,
      bd: 700,
    },
    fontSizes: {
      xs: '1.2rem',
      sm: '1.6rem',
      md: '2.4rem',
      lg: '3.2rem',
      xl: '4.0rem',
    },
  },
  mediaQuerys: {
    mobile: '325px',
    desktop: '1250px',
  },
};

const Theme = ({ children }: Iprops) => {
  return <ThemeProvider theme={themeDefault}>{children}</ThemeProvider>;
};
export default Theme;
