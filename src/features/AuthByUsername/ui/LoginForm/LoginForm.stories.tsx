import type { Meta, StoryObj } from '@storybook/react';

import { StoreProviderDecorator } from 'shared/config/storybook/StoreProviderDecorator/StoreProviderDecorator';
import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
    args: {},
    decorators: [StoreProviderDecorator({ loginForm: { username: 'admin', password: '123' } })],
};
export const WithError: Story = {
    args: {},
    decorators: [
        StoreProviderDecorator({ loginForm: { username: 'admin', password: '123', error: 'ERROR' } }),
    ],
};
export const IsLoading: Story = {
    args: {},
    decorators: [StoreProviderDecorator({ loginForm: { isLoading: true } })],
};
