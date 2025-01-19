import { Decorator } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slices/loginSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuelLoader';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
};

export function StoreProviderDecorator(
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
): Decorator {
    return (Story) => (
        <StoreProvider
            initialState={state}
            asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
        >
            <Story />
        </StoreProvider>
    );
}
