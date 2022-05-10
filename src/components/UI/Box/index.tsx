import { ReactNode } from 'react';
import { ContainerBox } from './styles';

export interface IBox {
  children: ReactNode;
  w?: string;
  px?: string;
  py?: string;
  pt?: string;
  pl?: string;
  pb?: string;
  pr?: string;
  mx?: string;
  my?: string;
  mt?: string;
  ml?: string;
  mb?: string;
  mr?: string;
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
}

export const Box = ({ children, ...props }: IBox) => {
  // eslint-disable-next-line prettier/prettier
  return (<ContainerBox {...props}>{children}</ContainerBox>);
};
