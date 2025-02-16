import type { Meta, StoryObj } from '@storybook/react';

import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import AvatarImg from 'shared/assets/tests/illusion-cernival.png';
import { ValidateProfileError } from 'features/EditableProfileCard/model/const/validateProfileError';
import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
    args: {
        data: {
            first: 'Тимур',
            lastname: 'Ульби',
            age: 33,
            currency: Currency.USD,
            country: Country.Kazahstan,
            city: 'Moscowff',
            username: 'admin',
            avatar: AvatarImg,
        },
    },
};
export const WithError: Story = {
    args: {
        error: ValidateProfileError.SERVER_ERROR,
    },
};
export const Loading: Story = {
    args: {
        isLoading: true,
    },
};
