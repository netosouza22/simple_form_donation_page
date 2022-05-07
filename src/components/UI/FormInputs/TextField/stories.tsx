import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { TextField } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;
