import { Decorator } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { articleDetailsReducer } from 'entities/Article/model/slices/articleDetailsSlice';
import { loginReducer } from 'features/AuthByUsername/model/slices/loginSlice';
import { profileReducer } from 'features/EditableProfileCard';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slices';
import { articlesPageReducer } from 'pages/ArticlePage/model/slices/articlePageSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuelLoader';

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
