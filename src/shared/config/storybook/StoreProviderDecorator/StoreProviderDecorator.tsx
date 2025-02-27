/* eslint-disable fsd-layer-import/public-api-import */
import { Decorator } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { articleDetailsReducer } from '@/entities/Article/testing';
import { loginReducer } from '@/features/AuthByUsername/testing';
import { profileReducer } from '@/features/EditableProfileCard/testing';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/testing';
import { articlesPageReducer } from '@/pages/ArticlePage/testing';
import { ReducersList } from '@/shared/lib/components/DynamicModuelLoader';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetailsPage: articleDetailsPageReducer,
    articleDetails: articleDetailsReducer,
    articlePage: articlesPageReducer,
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
