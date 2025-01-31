import type { Meta, StoryObj } from '@storybook/react';

import AvatarImg from 'shared/assets/tests/illusion-cernival.png';
import { ArticleBlockType, ArticleImageBlock } from '../../model/types/article';
import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';

const blockImage: ArticleImageBlock = {
    id: 2,
    type: ArticleBlockType.IMAGE,
    src: AvatarImg,
    title: 'Рисунок 1 - скриншот сайта',
};

const meta: Meta<typeof ArticleImageBlockComponent> = {
    title: 'entities/ArticleImageBlockComponent',
    component: ArticleImageBlockComponent,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleImageBlockComponent>;

export const Primary: Story = {
    args: {
        block: blockImage,
    },
};
