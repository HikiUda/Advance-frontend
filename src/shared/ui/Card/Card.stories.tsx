import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';
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
        children: (
            <Text
                title="title"
                text="text"
            />
        ),
    },
};
