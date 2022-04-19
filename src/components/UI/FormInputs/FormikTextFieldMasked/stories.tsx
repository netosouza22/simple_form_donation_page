import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { TextFieldMasked } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TextFieldMasked',
  component: TextFieldMasked,
  args: {
    helperText: 'asdasd',
    mask: 'cpf',
  },
} as ComponentMeta<typeof TextFieldMasked>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof TextFieldMasked> = (args) => <TextFieldMasked {...args} />;
