import type { Meta, StoryObj } from '@storybook/react';

import { ArticleViewSelector } from './ArticleViewSelector';
import { ArticleView } from '@/entities/Article';

const meta: Meta<typeof ArticleViewSelector> = {
    title: 'entities/ArticleViewSelector',
    component: ArticleViewSelector,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleViewSelector>;

export const Tiled: Story = {
    args: {
        view: ArticleView.SMALL,
    },
};
export const List: Story = {
    args: {
        view: ArticleView.BIG,
    },
};
