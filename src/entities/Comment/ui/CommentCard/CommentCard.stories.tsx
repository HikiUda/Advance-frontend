import type { Meta, StoryObj } from '@storybook/react';
import AvatarImg from '@/shared/assets/tests/illusion-cernival.png';

import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
    title: 'entities/CommentCard',
    component: CommentCard,

    tags: ['autodocs'],
};

const comment = {
    id: '1',
    text: 'some comment',
    user: {
        id: '1',
        username: 'admin',
        password: '123',
        role: 'ADMIN',
        avatar: AvatarImg,
    },
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Primary: Story = {
    args: { comment },
};
export const IsLoadign: Story = {
    args: { comment, isLoading: true },
};
