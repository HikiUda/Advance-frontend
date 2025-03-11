import type { Meta, StoryObj } from '@storybook/react';

import { ListBox } from './ListBox';

const meta: Meta<typeof ListBox> = {
    title: 'shared/ListBox',
    component: ListBox,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ListBox>;

export const Primary: Story = {
    args: {
        items: [
            { value: 'value1', content: 'value1', disabled: false },
            { value: 'value2', content: 'value2', disabled: false },
            { value: 'value3', content: 'value3', disabled: true },
        ],
        onChange: () => {},
        defaultValue: 'Select value',
    },
};
