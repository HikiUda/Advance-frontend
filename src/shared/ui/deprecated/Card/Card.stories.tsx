import type { Meta, StoryObj } from '@storybook/react';

import { Card, CardTheme } from './Card';
import { Text } from '../Text/Text';

const meta: Meta<typeof Card> = {
    title: 'shared/Card',
    component: Card,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
    args: {
        children: <Text title="title" text="text" />,
    },
};
export const Outlined: Story = {
    args: {
        theme: CardTheme.OUTLINED,
        children: 'text',
    },
};
