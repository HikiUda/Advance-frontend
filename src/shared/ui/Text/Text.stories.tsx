import type { Meta, StoryObj } from '@storybook/react';

import { Text, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const OnlyTitle: Story = {
    args: {
        title: 'Title',
    },
};
export const OnlyText: Story = {
    args: {
        text: 'text text text',
    },
};
export const WithTitleAndText: Story = {
    args: {
        title: 'Title',
        text: 'text text text',
    },
};
export const ErrorTitleAndText: Story = {
    args: {
        title: 'Title',
        text: 'text text text',
        theme: TextTheme.ERROR,
    },
};
export const SizeMTitleAndText: Story = {
    args: {
        title: 'Title',
        text: 'text text text',
        theme: TextTheme.ERROR,
        size: 'size_m',
    },
};
export const SizeSTitleAndText: Story = {
    args: {
        title: 'Title',
        text: 'text text text',
        theme: TextTheme.ERROR,
        size: 'size_s',
    },
};
export const SizeLTitleAndText: Story = {
    args: {
        title: 'Title',
        text: 'text text text',
        theme: TextTheme.ERROR,
        size: 'size_l',
    },
};
