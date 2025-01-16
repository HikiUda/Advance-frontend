import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Inventore repudianda beatae doloribus magnam fugit
                    fuga dicta harum deleniti! Soluta quaerat
                    modi doloremque delectus necessitatibus ducimus eius blanditiis vel id?`,
    },
};
