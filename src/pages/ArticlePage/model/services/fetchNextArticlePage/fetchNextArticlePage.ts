import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlePageLimit } from '../../selectors/getArticlePageLimit/getArticlePageLimit';
import { getArticlePageHasMore } from '../../selectors/getArticlePageHasMore/getArticlePageHasMore';
import { getArticlePageNum } from '../../selectors/getArticlePageNum/getArticlePageNum';
import { getArticlePageIsLoading } from '../../selectors/getArticlePageIsLoading/getArticlePageIsLoading';
import { articlesPageActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const fetchNextArticlePage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlePageSlice/fetchNextArticlePage',
    async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const page = getArticlePageNum(getState());
        const hasMore = getArticlePageHasMore(getState());
        const isLoading = getArticlePageIsLoading(getState());

        if (hasMore && !isLoading) {
            dispatch(articlesPageActions.setPage(page + 1));
            dispatch(fetchArticlesList({ page: page + 1 }));
        }
    },
);
