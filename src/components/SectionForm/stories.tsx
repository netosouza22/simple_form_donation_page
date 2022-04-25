import { ComponentMeta, ComponentStory } from '@storybook/react';
import SectionForm from './index';

export default {
  title: 'Template/SectionForm',
  component: SectionForm,
} as ComponentMeta<typeof SectionForm>;

export const Template: ComponentStory<typeof SectionForm> = (args) => <SectionForm {...args} />;
