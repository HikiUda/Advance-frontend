import type { Meta, StoryObj } from '@storybook/react';
import { ArticleListItemSkeleton } from './ArticleListItemSkeleton';
import { ArticleView } from '../../model/types/article';

const meta: Meta<typeof ArticleListItemSkeleton> = {
    title: 'entities/ArticleListItemSkeleton',
    component: ArticleListItemSkeleton,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleListItemSkeleton>;

export const Tiled: Story = {
    args: {},
};
export const List: Story = {
    args: {
        view: ArticleView.BIG,
    },
};
