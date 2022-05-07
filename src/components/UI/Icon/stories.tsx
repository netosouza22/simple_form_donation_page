import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Icon1 from '../../../assets/icons/icon-facebook.svg';
import { Icon } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/Icon',
  component: Icon,

  args: {
    width: '30px',
    height: '30px',
    srcImg: Icon1,
    text: 'Conhecimento',
  },
} as ComponentMeta<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;
