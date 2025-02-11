import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
    title: 'shared/Flex',
    component: Flex,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Primary: Story = {
    args: {
        children: (
            <>
                <div>element</div>
                <div>element</div>
                <div>element</div>
                <div>element</div>
                <div>element</div>
            </>
        ),
    },
};
