import { ComponentMeta, ComponentStory } from '@storybook/react';
import { GridImage } from './index';
import { GridImageArray } from './mock';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Template/GridImage',
  component: GridImage,
  args: {
    ImgArray: GridImageArray,
  },
} as ComponentMeta<typeof GridImage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof GridImage> = (args) => <GridImage {...args} />;
