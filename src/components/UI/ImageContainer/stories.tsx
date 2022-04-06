import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Img1 from '../../../assets/imgs/criança1.jpg';
import { ImageContainer } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Image Container',
  component: ImageContainer,

  args: {
    width: '20px',
    height: '30px',
    srcImg: Img1,
    text: 'Conhecimento',
  },
} as ComponentMeta<typeof ImageContainer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof ImageContainer> = (args) => <ImageContainer {...args} />;
