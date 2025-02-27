import type { Meta, StoryObj } from '@storybook/react';

import { StoreProviderDecorator } from '@/shared/config/storybook/StoreProviderDecorator/StoreProviderDecorator';
import AvatarImg from '@/shared/assets/tests/illusion-cernival.png';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
    title: 'page/ProfilePage',
    component: ProfilePage,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Primary: Story = {
    decorators: [
        StoreProviderDecorator({
            profile: {
                form: {
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
        }),
    ],
};
