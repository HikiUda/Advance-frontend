import type { Meta, StoryObj } from '@storybook/react';

import { ArticlePageFilter } from './ArticlePageFilter';

const meta: Meta<typeof ArticlePageFilter> = {
    title: 'page/ArticlePageFilter',
    component: ArticlePageFilter,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticlePageFilter>;

export const Primary: Story = {};
