import type { Meta, StoryObj } from '@storybook/react';

import { DropDown } from './DropDown';
import { Button } from '../../../Button/Button';

const meta: Meta<typeof DropDown> = {
    title: 'shared/DropDown',
    component: DropDown,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DropDown>;

export const TopLeft: Story = {
    args: {
        direction: 'top left',
        trigger: <Button>Open</Button>,
        items: [{ content: 'Profile' }, { content: 'Main' }, { content: 'Exit' }],
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 100 }}>
                <Story />
            </div>
        ),
    ],
};
export const TopRight: Story = {
    args: {
        direction: 'top right',
        trigger: <Button>Open</Button>,
        items: [{ content: 'Profile' }, { content: 'Main' }, { content: 'Exit' }],
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 100 }}>
                <Story />
            </div>
        ),
    ],
};
export const BottomLeft: Story = {
    args: {
        direction: 'bottom left',
        trigger: <Button>Open</Button>,
        items: [{ content: 'Profile' }, { content: 'Main' }, { content: 'Exit' }],
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 100 }}>
                <Story />
            </div>
        ),
    ],
};
export const BottomRight: Story = {
    args: {
        direction: 'bottom right',
        trigger: <Button>Open</Button>,
        items: [{ content: 'Profile' }, { content: 'Main' }, { content: 'Exit' }],
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 100 }}>
                <Story />
            </div>
        ),
    ],
};
