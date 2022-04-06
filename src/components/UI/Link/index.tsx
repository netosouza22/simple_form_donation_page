// @flow
import * as React from 'react';
import styled, { css } from 'styled-components';

interface Iprops {
  bold: boolean;
  children: string;
}

const ContainerLink = styled.a<Iprops>`
  ${({ theme, bold }) => css`
    position: relative;
    margin: 0px 10px;
    padding: 0px 7px;
    color: ${theme.colors.common.black};
    font-size: ${theme.font.fontSizes.sm};
    font-weight: ${bold ? 700 : 400};
    cursor: pointer;

    &::before {
      content: '';
      position: absolute;
      width: 4px;
      height: 0%;
      left: 0;
      bottom: 50%;
      background-color: ${theme.colors.secondary.main};
      border-radius: 10px;
      transition: ease-in-out 0.2s;
    }

    &:hover::before {
      height: 70%;
      left: 0;
      bottom: 20%;
    }
  `}
`;

const ContactForm = ({ children, bold }: Iprops) => {
  return <ContainerLink bold={bold}>{children}</ContainerLink>;
};

export default ContactForm;
