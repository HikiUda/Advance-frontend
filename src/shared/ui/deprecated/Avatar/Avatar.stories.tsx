import type { Meta, StoryObj } from '@storybook/react';

import AvatarImg from '@/shared/assets/tests/illusion-cernival.png';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
    args: {
        src: AvatarImg,
    },
};
export const PrimarySize300px: Story = {
    args: {
        src: AvatarImg,
        size: 300,
    },
};
