import type { Meta, StoryObj } from '@storybook/react';

import AboutPage from './AboutPage';

const meta: Meta<typeof AboutPage> = {
    title: 'page/AboutPage',
    component: AboutPage,

    tags: ['autodocs'],

};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Primary: Story = {

};
