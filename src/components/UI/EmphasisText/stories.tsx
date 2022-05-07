import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import EmphasisText from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/EmphasisText',
  component: EmphasisText,
} as ComponentMeta<typeof EmphasisText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EmphasisText> = (args) => <EmphasisText {...args} />;

export const SmallText = Template.bind({});
export const MediumText = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SmallText.args = {
  children: 'Doar para',
  size: 'small',
  fontSize: 'sm',
  fontWeight: 'bd',
  colorDark: true,
};
MediumText.args = {
  children: 'Insira seus dados para fazer a doação para esta Instituição',
  size: 'small',
  fontSize: 'md',
  fontWeight: 'rg',
  colorDark: true,
};
