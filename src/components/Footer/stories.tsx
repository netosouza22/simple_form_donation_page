import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Footer } from './index';
import { footerInfo } from './mock';

export default {
  title: 'Template/Footer',
  component: Footer,
  args: {
    email: footerInfo.email,
    phone: footerInfo.phone,
    iconsContact: footerInfo.iconsContact,
    iconsMedia: footerInfo.iconsMedia,
  },
} as ComponentMeta<typeof Footer>;

export const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;
