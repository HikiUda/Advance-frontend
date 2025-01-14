import { DeepPartial } from '@reduxjs/toolkit';
import { Decorator } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export function StoreProviderDecorator(state: DeepPartial<StateSchema>): Decorator {
    return (Story) => (
        <StoreProvider initialState={state}>
            <Story />
        </StoreProvider>
    );
}
