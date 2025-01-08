import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,

    tags: ['autodocs'],
    args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Text',
    },
};
export const Clear: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: 'Text',
    },
};
export const Outline: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'Text',
    },
};
