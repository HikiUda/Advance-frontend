import type { Meta, StoryObj } from '@storybook/react';
import AvatarImg from 'shared/assets/tests/illusion-cernival.png';
import { CommentList } from './CommentList';

const meta: Meta<typeof CommentList> = {
    title: 'entities/CommentList',
    component: CommentList,

    tags: ['autodocs'],
};
const comments = [
    {
        id: '1',
        text: 'some comment',
        user: {
            id: '1',
            username: 'admin',
            password: '123',
            role: 'ADMIN',
            avatar: AvatarImg,
        },
    },
    {
        id: '2',
        text: 'some comment',
        user: {
            id: '1',
            username: 'admin',
            password: '123',
            role: 'ADMIN',
            avatar: AvatarImg,
        },
    },
    {
        id: '3',
        text: 'some comment',
        user: {
            id: '1',
            username: 'admin',
            password: '123',
            role: 'ADMIN',
            avatar: AvatarImg,
        },
    },
];

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Primary: Story = {
    args: { comments },
};
export const IsLoading: Story = {
    args: { comments, isLoading: true },
};
