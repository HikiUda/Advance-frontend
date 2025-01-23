import type { Meta, StoryObj } from '@storybook/react';

import { StoreProviderDecorator } from 'shared/config/storybook/StoreProviderDecorator/StoreProviderDecorator';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
    title: 'widget/Sidebar',
    component: Sidebar,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Primary: Story = {
    decorators: [StoreProviderDecorator({ user: { authData: {} } })],
};
export const isNotAuth: Story = {};
