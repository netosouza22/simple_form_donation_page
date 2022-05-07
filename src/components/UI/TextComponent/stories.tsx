import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { TextComponent } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/TextComponent',
  component: TextComponent,

  args: {
    background: false,
    children: 'Olá',
    colorDark: true,
    fontSize: 'sm',
    bold: true,
  },
} as ComponentMeta<typeof TextComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof TextComponent> = (args) => <TextComponent {...args} />;

// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   variant: 'primary',
//   children: 'Socorro',
//   size: 'small',
// };
