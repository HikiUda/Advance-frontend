import type { Meta, StoryObj } from '@storybook/react';

import AdminPanelPage from './AdminPanelPage';

const meta: Meta<typeof AdminPanelPage> = {
    title: 'shared/AdminPanelPage',
    component: AdminPanelPage,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AdminPanelPage>;

export const Primary: Story = {};
