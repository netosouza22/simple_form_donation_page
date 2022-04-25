import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { RadioButton } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'RadioButton',
  component: RadioButton,
  args: {
    label: 'label',
  },
} as ComponentMeta<typeof RadioButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof RadioButton> = (args) => <RadioButton {...args} />;
