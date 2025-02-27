import type { Meta, StoryObj } from '@storybook/react';

import ForbiddenPage from './ForbiddenPage';

const meta: Meta<typeof ForbiddenPage> = {
    title: 'page/ForbiddenPage',
    component: ForbiddenPage,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ForbiddenPage>;

export const Primary: Story = {};
