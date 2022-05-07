import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Icon1 from '../../../assets/icons/conhecimento.png';
import { ItemListIcon } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/ItemListIcon',
  component: ItemListIcon,

  args: {
    srcImg: Icon1,
    text: 'conhecimento',
    width: '30px',
    height: '30px',
    colorDark: true,
    fontSize: 'xs',
    bold: true,
    children: 'Fornecimento de Refeições',
  },
} as ComponentMeta<typeof ItemListIcon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof ItemListIcon> = (args) => <ItemListIcon {...args} />;
