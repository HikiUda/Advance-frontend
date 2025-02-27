import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsScheme } from '@/entities/Article';
import { CounterSchema } from '@/entities/Counter';
import { UserScheme } from '@/entities/User';
import { AddCommentFormScheme } from '@/features/addCommentForm';
import { LoginScheme } from '@/features/AuthByUsername';
import { ProfileScheme } from '@/features/EditableProfileCard';
import { ArticleDetailsPageScheme } from '@/pages/ArticleDetailsPage';
import { ArticlePageScheme } from '@/pages/ArticlePage';
import { rtkApi } from '@/shared/api/rtkApi';
import { ScrollSaveScheme } from '@/widgets/ScrollSave';

export interface StateSchema {
    counter: CounterSchema;
    user: UserScheme;
    scrollSave: ScrollSaveScheme;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
    loginForm?: LoginScheme;
    profile?: ProfileScheme;
    articleDetails?: ArticleDetailsScheme;
    addCommentForm?: AddCommentFormScheme;
    articlePage?: ArticlePageScheme;
    articleDetailsPage?: ArticleDetailsPageScheme;
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
