import type { Meta, StoryObj } from '@storybook/react';

import { ArticleBlockType, ArticleCodeBlock } from '../../model/types/article';
import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';

const codeBlock: ArticleCodeBlock = {
    id: 3,
    type: ArticleBlockType.CODE,
    code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
};

const meta: Meta<typeof ArticleCodeBlockComponent> = {
    title: 'entities/ArticleCodeBlockComponent',
    component: ArticleCodeBlockComponent,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleCodeBlockComponent>;

export const Primary: Story = {
    args: {
        block: codeBlock,
    },
};
