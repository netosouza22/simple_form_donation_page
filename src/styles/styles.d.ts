import 'styled-components';

interface IPaletteCommon {
  black: string;
  white: string;
  mainBg: string;
}

interface IPalette {
  ultraLight: string;
  light: string;
  main: string;
  dark: string;
}
interface IFontSize {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

interface IFontWeight {
  rg: number;
  md: number;
  bd: number;
}

//Uma forma de exportar usando typeScript
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      common: IPaletteCommon;
      primary: IPalette;
      secondary: IPalette;
    };
    font: {
      fontSizes: IFontSize;
      weights: IFontWeight;
    };
    mediaQuerys: {
      mobile: string;
      desktop: string;
    };
  }
}
