import { Decorator } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';

export const StoreProviderDecorator: Decorator = (Story) => (
    <StoreProvider>
        <Story />
    </StoreProvider>
);
