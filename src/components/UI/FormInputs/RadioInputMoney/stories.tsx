import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { RadioButtonMoney } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/RadioButtonMoney',
  component: RadioButtonMoney,
  args: {
    name: 'RadioButtonMoney',
    label: 'label',
  },
} as ComponentMeta<typeof RadioButtonMoney>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof RadioButtonMoney> = (args) => <RadioButtonMoney {...args} />;
