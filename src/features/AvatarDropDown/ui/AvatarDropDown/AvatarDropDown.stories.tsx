import type { Meta, StoryObj } from '@storybook/react';

import { AvatarDropDown } from './AvatarDropDown';

const meta: Meta<typeof AvatarDropDown> = {
    title: 'shared/AvatarDropDown',
    component: AvatarDropDown,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AvatarDropDown>;

export const Primary: Story = {};
