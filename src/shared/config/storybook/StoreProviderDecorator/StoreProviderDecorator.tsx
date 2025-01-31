import { Decorator } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { articleDetailsReducer } from 'entities/Article/model/slices/articleDetailsSlice';
import { profileReducer } from 'entities/Profile';
import { loginReducer } from 'features/AuthByUsername/model/slices/loginSlice';
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailssPage/model/slices/articleDetailsCommentsSlice';
import { articlesPageReducer } from 'pages/ArticlePage/model/slices/articlePageSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuelLoader';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetailsComments: articleDetailsCommentsReducer,
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
