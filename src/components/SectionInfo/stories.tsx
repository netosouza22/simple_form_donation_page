import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import SectionInfo from './index';
import { SectionInfoRes } from './mock';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Template/SectionInfo',
  component: SectionInfo,

  args: {
    GridImageArray: SectionInfoRes.gridImageArray,
    footerInfo: SectionInfoRes.footerInfo,
    backgroundImg: SectionInfoRes.backgroundImg,
  },
} as ComponentMeta<typeof SectionInfo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof SectionInfo> = (args) => <SectionInfo {...args} />;
