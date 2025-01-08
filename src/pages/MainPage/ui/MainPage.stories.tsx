import type { Meta, StoryObj } from '@storybook/react';

import  MainPage  from './MainPage';

const meta: Meta<typeof MainPage> = {
  title: 'page/MainPage',
  component: MainPage,

  tags: ['autodocs'],

} ;

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Primary: Story = {
 
};
