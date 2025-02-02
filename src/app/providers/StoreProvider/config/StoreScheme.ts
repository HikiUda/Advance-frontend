import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsScheme } from 'entities/Article';
import { CounterSchema } from 'entities/Counter/';
import { ProfileScheme } from 'entities/Profile';
import { UserScheme } from 'entities/User';
import { AddCommentFormScheme } from 'features/addCommentForm';
import { LoginScheme } from 'features/AuthByUsername';
import { ArticleDetailsCommentsScheme } from 'pages/ArticleDetailssPage';
import { ArticlePageScheme } from 'pages/ArticlePage';
import { ScrollSaveScheme } from 'widgets/ScrollSave';

export interface StateSchema {
    counter: CounterSchema;
    user: UserScheme;
    scrollSave: ScrollSaveScheme;
    loginForm?: LoginScheme;
    profile?: ProfileScheme;
    articleDetails?: ArticleDetailsScheme;
    articleDetailsComments?: ArticleDetailsCommentsScheme;
    addCommentForm?: AddCommentFormScheme;
    articlePage?: ArticlePageScheme;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
