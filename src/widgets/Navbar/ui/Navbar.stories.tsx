import type { Meta, StoryObj } from '@storybook/react';

import { StoreProviderDecorator } from 'shared/config/storybook/StoreProviderDecorator/StoreProviderDecorator';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
    title: 'widget/Navbar',
    component: Navbar,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Primary: Story = {};
export const AuthUser: Story = {
    decorators: [StoreProviderDecorator({ user: { authData: { username: 'admin', id: '1' } } })],
};
