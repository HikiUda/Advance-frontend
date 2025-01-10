import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button, ButtonSize, ThemeButton } from './Button';

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
export const ClearInverted: Story = {
    args: {
        theme: ThemeButton.CLEAR_INVERTED,
        children: 'Text',
    },
};

export const Background: Story = {
    args: {
        theme: ThemeButton.BACKGROUND,
        children: 'Text',
    },
};
export const BackgroundInverted: Story = {
    args: {
        theme: ThemeButton.BACKGROUND_INVERTED,
        children: 'Text',
    },
};
export const SquareSizeM: Story = {
    args: {
        square: true,
        size: ButtonSize.M,
        theme: ThemeButton.BACKGROUND_INVERTED,
        children: '>',
    },
};
export const SquareSizeL: Story = {
    args: {
        square: true,
        size: ButtonSize.L,
        theme: ThemeButton.BACKGROUND_INVERTED,
        children: '>',
    },
};
export const SquareSizeXL: Story = {
    args: {
        square: true,
        size: ButtonSize.XL,
        theme: ThemeButton.BACKGROUND_INVERTED,
        children: '>',
    },
};
export const OutlineSizeM: Story = {
    args: {
        size: ButtonSize.M,
        theme: ThemeButton.OUTLINE,
        children: 'Text',
    },
};
export const OutlineSizeL: Story = {
    args: {
        size: ButtonSize.L,
        theme: ThemeButton.OUTLINE,
        children: 'Text',
    },
};
export const OutlineSizeXL: Story = {
    args: {
        size: ButtonSize.XL,
        theme: ThemeButton.OUTLINE,
        children: 'Text',
    },
};
