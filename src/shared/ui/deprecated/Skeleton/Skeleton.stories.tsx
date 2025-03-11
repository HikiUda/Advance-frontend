import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
    title: 'shared/Skeleton',
    component: Skeleton,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Primary: Story = {
    args: {
        height: 100,
        width: 300,
    },
};
export const Circle: Story = {
    args: {
        height: 100,
        width: 100,
        border: '50%',
    },
};
