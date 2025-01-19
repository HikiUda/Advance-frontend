import type { Meta, StoryObj } from '@storybook/react';

import { StoreProviderDecorator } from 'shared/config/storybook/StoreProviderDecorator/StoreProviderDecorator';
import { LoginModal } from './LoginModal';

const meta: Meta<typeof LoginModal> = {
    title: 'features/LoginModal',
    component: LoginModal,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoginModal>;

export const Primary: Story = {
    args: {
        isTesting: true,
        isOpen: true,
    },
    decorators: [StoreProviderDecorator({ loginForm: { username: 'admin', password: '123' } })],
};
