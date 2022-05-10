import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Box } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/Box',
  component: Box,
} as ComponentMeta<typeof Box>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;
