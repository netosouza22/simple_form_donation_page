import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Heading from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const SmallText = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SmallText.args = {
  children: 'Filhos do Amanhã',
  uppercase: false,
  as: 'h3',
  size: 'lg',
  colorDark: true,
};
