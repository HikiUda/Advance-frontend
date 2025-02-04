import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { SortOrder } from 'shared/types/sort';
import { ArticleSortFeald, ArticleType } from 'entities/Article/model/types/article';
import { getArticlePageInited } from '../../selectors/getArticlePageInited/getArticlePageInited';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../slices/articlePageSlice';

export const initArticlePage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'articlePageSlice/initedArticlePage',
    async (searchParams, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const _inited = getArticlePageInited(getState());

        if (!_inited) {
            const order = searchParams.get('order') as SortOrder;
            const sort = searchParams.get('sort') as ArticleSortFeald;
            const search = searchParams.get('search');
            const type = searchParams.get('type') as ArticleType;
            if (order) {
                dispatch(articlesPageActions.setOreder(order));
            }
            if (sort) {
                dispatch(articlesPageActions.setSort(sort));
            }
            if (search) {
                dispatch(articlesPageActions.setSearch(search));
            }
            if (type) {
                dispatch(articlesPageActions.setType(type));
            }
            dispatch(articlesPageActions.initState());
            dispatch(fetchArticlesList({}));
        }
    },
);
